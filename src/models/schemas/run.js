const Schema = require('mongoose').Schema;
const driver = require('./driver');

const runSchema = new Schema({
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  driver: {
    type: driver,
    required: [true, 'Driver is required!']
  },
  startFuelLevel: {
    type: Number,
    required: [true, 'Start fuel level is required!'],
    max: [100, 'Fuel level cannot be more than 100!'],
    min: [100, 'Fuel level cannot be less than 100!']
  },
  startMilage: {
    type: Number,
    required: [true, 'Start milage is required!'],
    min: [0, 'Start milage cannot be less that 0!']
  }
});

module.exports = runSchema;
