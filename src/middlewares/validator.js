const Joi = require('joi');

module.exports = schema => (object, request, response, next) => {
    const validationResult = Joi.validate(object, schema);

    if (validationResult.error) {
        response
            .status(422)
            .send(validationResult.error.details[0].message);
    } else {
        next();
    }
};
