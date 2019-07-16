const Joi = require('joi');

module.exports = Joi
    .object()
    .keys({
        registrationNumber: Joi.number().integer().required(),
        _id: Joi.any(),
        productionInfo: {
          _id: Joi.any(),
          brand: Joi.string().required(),
          model: Joi.string().required(),
          date: Joi.date().required(),
        },
        status: Joi.string().valid('In use', 'Free', 'Unavialable', 'In Service').required(),
        fuelLevel: Joi.number().required().min(0).max(100),
        mileage: Joi.number().required().min(0),
        currentRun: {
          _id: Joi.any(),
          startDate: Joi.date().required(),
          driver: {
            _id: Joi.any(),
            licenseNumber: Joi.number().required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            creditCard: {
              _id: Joi.any(),
              number: Joi.number().integer().required(),
              owner: Joi.string().required(),
              validThrough: Joi.date().required()
            }
          },
          startFuelLevel: Joi.number().min(0).max(100).required(),
          startMilage: Joi.number().min(0).required()
        },
        location: Joi.array().required(),
        bookingsHistory: Joi.array(),
        __v: Joi.any()
    });
