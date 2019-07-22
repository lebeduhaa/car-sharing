const Joi = require('joi');

module.exports = Joi
    .object()
    .keys({
        page: Joi
            .number()
            .integer()
            .required(),
        size: Joi
            .number()
            .integer()
            .required()
    });
