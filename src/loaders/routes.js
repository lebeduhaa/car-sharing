const cars = require('../routes/cars');

module.exports = expressApp => {
  expressApp.use('/cars', cars);
}
