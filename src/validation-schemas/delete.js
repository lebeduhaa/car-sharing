const Joi = require('joi');

module.exports = Joi
    .object()
    .keys({
        vin: Joi
            .number()
            .required()
    });
