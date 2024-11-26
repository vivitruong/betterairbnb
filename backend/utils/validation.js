// backend/utils/validation.js
const { validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = Object.assign({}, ...validationErrors
            .array()
            .map((error) => ({ [error.param]: error.msg })));

        const err = Error('Validation error');
        err.errors = errors;
        err.status = 400;
        err.title = 'Bad request.';
        next(err);
    }
    // if there are no validation errors, invoke the next middleware
    next();
};

module.exports = {
    handleValidationErrors
};
