const Joi = require('joi');

module.exports = Joi
    .object()
    .keys({
        status: Joi
            .string()
            .valid('In use', 'Free', 'Unavailable', 'In Service', 'Reserved')
            .required(),
        fuel: Joi
          .number()
          .min(0)
          .max(100)
          .required()
    });
