const Car = require('../models/car');

class CarsService {
  
  static getAll() {
    return new Promise((resolve, reject) => {
      Car.find({}, (err, cars) => {
        if (err) {
          reject(err);
        } else {
          resolve(cars);
        }
      });
    });
  }

}

module.exports = CarsService;
