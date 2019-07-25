const { Schema } = require('mongoose');
const productionInfo = require('./production-info');
const runSchema = require('./run');

const carSchema = new Schema({
    vin: {
        type: Number,
        required: [true, 'VIN is required!'],
        unique: [true, 'VIN is unique attribute!Car with same VIN is already exists!']
    },
    registrationNumber: {
        type: Number,
        required: [true, 'Registration number is required!']
    },
    productionInfo: {
        type: productionInfo,
        required: [true, 'Production info is required!']
    },
    status: {
        type: String,
        enum: ['Free', 'Reserved', 'In use', 'Unavailable', 'In Service'],
        default: 'Free',
        required: [true, 'Status is required!']
    },
    fuelLevel: {
        type: Number,
        required: [true, 'Fuel level is required!'],
        max: [100, 'Fuel level cannot be more than 100!'],
        min: [0, 'Fuel level cannot be less than 100!']
    },
    mileage: {
        type: Number,
        required: [true, 'Mileage is required!'],
        min: [0, 'Mileage cannot be less than 0!']
    },
    currentRun: {
        type: runSchema,
        default: null
    },
    location: {
        type: [Number],
        required: [true, 'Location is required!']
    },
    bookingsHistory: {
        type: [runSchema.add({
            finishFuelLevel: Number,
            finishMilage: Number
        })],
        default: []
    }
});

module.exports = carSchema;
