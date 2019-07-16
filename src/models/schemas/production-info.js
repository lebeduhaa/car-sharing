const { Schema } = require('mongoose');

const productionInfoSchema = new Schema({
    brand: {
        type: String,
        required: [true, 'Brand is required!']
    },
    model: {
        type: String,
        required: [true, 'Model is required!']
    },
    date: {
        type: Date,
        required: [true, 'Date of production is required!']
    }
});

module.exports = productionInfoSchema;
