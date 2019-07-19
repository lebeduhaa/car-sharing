const Joi = require('joi');

module.exports = Joi
    .object()
    .keys({
        latitude: Joi
          .number()
          .required(),
        longitude: Joi
          .number()
          .required()
    });
