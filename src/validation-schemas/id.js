const Joi = require('joi');

module.exports = Joi
    .object()
    .keys({
        id: Joi
          .number()
          .required()
    });
