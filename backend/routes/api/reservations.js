// backend/routes/api/reservations.js
const { Op } = require('sequelize');
const express = require('express')
const { requireAuth } = require('../../utils/auth');
const { Room, Reservation, Image, sequelize } = require('../../db/models');
const router = express.Router();

router.get('/', requireAuth, async (req, res) => {
    const reservations = await Reservation.findAll({
        // where: { userId: req.user.id },
        include: [
            {
                model: Room,
                attributes: { exclude: ['numReviews', 'avgStarRating', 'createdAt', 'updatedAt'] },
                include: [
                    {
                        model: Image,
                        as: 'images',
                        attributes: ['url']
                    }
                ]
            }
        ]
    })
    return res.json({ 'Reservations': reservations })
})

router.delete('/:reservationId', requireAuth, async (req, res, next) => {
    const deleteReservation = await Reservation.findOne({
        where: {
            id: req.params.reservationId,
            // userId: req.user.id
        },
        // attributes: ['startDate', 'endDate'],
        // raw: true // frontEnd is giving deleteReservation.destroy is not a function
    })

    let today = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })

    if (!deleteReservation) {
        const err = new Error(`Reservation couldn't be found`);
        err.status = 404;
        return next(err)
    } else if (new Date(deleteReservation.startDate) < today) {
        const err = new Error(`Reservations that have been started can't be deleted`);
        err.status = 404;
        return next(err)
    } else {
        await deleteReservation.destroy();
        res.status = 200;
        return res.json({
            message: "Successfully deleted",
            statusCode: res.status
        })
    }
})

module.exports = router;
