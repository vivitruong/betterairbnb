// backend/utils/auth.js
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User, Room, Review, Reservation, Image } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

// sets the JWT Cookie after user is logged in or signed up
// generates JWT using imported secret
const setTokenCookie = (res, user) => {
    // create the token
    const token = jwt.sign(
        { data: user.toSafeObject() },
        secret,
        { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
    );

    const isProduction = process.env.NODE_ENV === "production";
    // set the token cookie (HTTP-only cookie)
    res.cookie('token', token, {
        maxAge: expiresIn * 1000, // maxAge in milliseconds
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction && "Lax"
    });
    return token;
};

// restoreUser will restore the session user based on the contents of the JWT cookie
const restoreUser = (req, res, next) => {
    // token parsed from cookies
    const { token } = req.cookies;
    req.user = null;

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        if (err) {
            return next();
        }

        try {
            const { id } = jwtPayload.data;
            req.user = await User.scope('currentUser').findByPk(id);
            // console.log(req.user)
        } catch (e) {
            res.clearCookie('token');
            return next();
        }

        if (!req.user) res.clearCookie('token');

        return next();
    });
};

// If there is no current user, return an error
// requires a session user to be authenticated before accessing a route
const requireAuth = function (req, _res, next) {
    if (req.user) return next();

    const err = new Error('Authentication required');
    err.title = 'Unauthorized';
    err.errors = ['Unauthorized'];
    err.status = 401;
    return next(err);
}

const checkRoomExists = async function (req, _res, next) {
    const room = await Room.findByPk(req.params.roomId)

    if (!room) {
        const err = new Error(`Spot couldn't be found`);
        err.status = 404;
        return next(err);
    } else {
        return next()
    }
}

const checkNotOwner = async function (req, _res, next) {
    const room = await Room.findAll({
        where: {
            id: req.params.roomId,
            ownerId: req.user.id
        }
    })

    if (Object.keys(room).length) {
        const err = new Error(`Hosts can't reserve their own listings`);
        err.status = 403;
        return next(err);
    } else {
        return next()
    }
}

const checkNotOwnerReviews = async function (req, _res, next) {
    const room = await Room.findAll({
        where: {
            id: req.params.roomId,
            ownerId: req.user.id
        }
    })

    if (Object.keys(room).length) {
        const err = new Error(`Hosts can't review their own listings`);
        err.status = 403;
        return next(err);
    } else {
        return next()
    }
}

const checkOwnerRoom = async function (req, _res, next) {
    const room = await Room.findOne({
        where: {
            id: req.params.roomId,
        },
        attributes: ['ownerId'],
        raw: true
    })

    if (!room) {
        const err = new Error(`Spot couldn't be found`);
        err.status = 404;
        return next(err)
    } else if (room.ownerId !== req.user.id) {
        const err = new Error(`Spot must belong to the current user`);
        err.status = 403;
        return next(err);
    } else {
        return next()
    }
}

const checkUserReview = async function (req, _res, next) {
    const review = await Review.findOne({
        where: {
            id: req.params.reviewId,
        },
        attributes: ['userId'],
        raw: true
    })

    if (!review) {
        const err = new Error(`Review couldn't be found`);
        err.status = 404;
        return next(err)
    } else if (review.userId !== req.user.id) {
        const err = new Error(`Review must belong to the current user`);
        err.status = 403;
        return next(err)
    } else {
        return next()
    }
}

const checkReviewValidation = function (req, _res, next) {
    const { review, stars } = req.body;
    let errorResult = { errors: {} }

    if (review.length < 10 || review.length > 1000) errorResult.errors.review = 'Review must be between 10 and 1000 characters'
    if (stars < 1 || stars > 5) errorResult.errors.star = 'Rating must be between 1 to 5 stars'

    if (Object.keys(errorResult.errors).length) {
        const err = new Error('Validation Error');
        err.status = 400;
        err.errors = errorResult.errors
        return next(err)
    } else {
        return next()
    }
}

const checkReservationValidation = async function (req, _res, next) {
    const { startDate, endDate } = req.body;
    let errorResult = { errors: {} }

    const allReservations = await Reservation.findAll({
        where: { roomId: req.params.roomId },
        attributes: ['userId', 'startDate', 'endDate'],
        raw: true
    })

    let currStartDates = []
    let currEndDates = []
    // let reservationUser = [];

    for (let i = 0; i < Object.keys(allReservations).length; i++) {
        currStartDates.push(allReservations[i].startDate)
        currEndDates.push(allReservations[i].endDate)
    }

    for (let i = 0; i < currStartDates.length; i++) {
        let startRes = new Date(currStartDates[i]).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
        let endRes = new Date(currEndDates[i]).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })

        let startReq = new Date(startDate).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
        let endReq = new Date(endDate).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })

        if ((startReq > startRes && startReq < endRes) ||
            (endReq > startRes && endReq < endRes) ||
            startRes > startReq && startRes < endReq ||
            (endRes > startReq && endRes < endReq)) {
            errorResult.errors.date = `Dates conflicts with an existing reservation`
        } else if (startRes === startReq) {
            errorResult.errors.startDate = 'Check-in date conflicts with an existing reservation'
        } else if (endRes === endReq) {
            errorResult.errors.endDate = 'Check-out date conflicts with an existing reservation'
        }
    }

    if (Object.keys(errorResult.errors).length) {
        const err = new Error(`Sorry, this spot is already booked for the specified dates`);
        err.status = 403;
        err.errors = errorResult.errors
        return next(err)
    } else {
        return next()
    }
}

const checkMaxImagesReviews = async function (req, _res, next) {
    const totalImagesReviews = await Image.findAll({
        where: { reviewId: req.params.reviewId },
        raw: true
    })

    if (Object.keys(totalImagesReviews).length >= 10) {
        const err = new Error(`Maximum number of images for this resource was reached`);
        err.status = 400;
        return next(err)
    } else {
        return next()
    }
}

const checkMaxImagesRooms = async function (req, _res, next) {
    const totalImagesRooms = await Image.findAll({
        where: { roomId: req.params.roomId },
        raw: true
    })

    if (Object.keys(totalImagesRooms).length >= 10) {
        const err = new Error(`Maximum number of images for this resource was reached`);
        err.status = 400;
        return next(err)
    } else {
        return next()
    }
}

module.exports = {
    setTokenCookie,
    restoreUser,
    requireAuth,
    checkRoomExists,
    checkNotOwner,
    checkNotOwnerReviews,
    checkOwnerRoom,
    checkUserReview,
    checkReviewValidation,
    checkReservationValidation,
    checkMaxImagesReviews,
    checkMaxImagesRooms
};
