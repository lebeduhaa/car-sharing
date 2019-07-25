const Joi = require('joi');

module.exports = Joi
    .object()
    .keys({
        status: Joi
            .string()
            .valid('In use', 'Free', 'Unavailable', 'In Service', 'Reserved')
            .required(),
        card: Joi
            .boolean()
            .required()
    });
