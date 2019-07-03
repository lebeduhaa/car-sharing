const Schema = require('mongoose').Schema;

const creditCardSchema = new Schema({
  number: {
    type: Number,
    required: [true, 'Number of the driver`s credit card is required!']
  },
  owner: {
    type: String,
    required: [true, 'Owner of the driver`s credit card is required!']
  },
  validThrough: {
    type: Date,
    required: [true, 'Date of the driver`s credit card is required!']
  }
});

module.exports = creditCardSchema;
