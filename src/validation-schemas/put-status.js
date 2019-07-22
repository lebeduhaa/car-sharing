const Joi = require('joi');

module.exports = Joi
    .object()
    .keys({
        date: Joi
            .date()
            .required(),
        mileage: Joi
            .number()
            .min(0)
            .required(),
        status: Joi
            .string()
            .valid('In use', 'Free', 'Unavailable', 'In Service', 'Reserved')
            .required()
    });
