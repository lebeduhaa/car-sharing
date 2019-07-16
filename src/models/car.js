const mongoose = require('mongoose');
const carSchema = require('./schemas/car');

module.exports = mongoose.model('car', carSchema);
