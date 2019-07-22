const { Schema } = require('mongoose');
const creditCard = require('./credit-card');

const driverSchema = new Schema({
    licenseNumber: {
        type: Number,
        required: [true, 'Licence number of the driver is required!']
    },
    firstName: {
        type: String,
        required: [true, 'First name of the driver is required!']
    },
    lastName: {
        type: String,
        required: [true, 'Last name of the driver is required!']
    },
    creditCard: {
        type: creditCard,
        required: [true, 'Credit card of the driver is required']
    }
});

module.exports = driverSchema;
