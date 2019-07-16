const Car = require('../models/car');

class CarsService {
  
  static getAll() {
    return new Promise((resolve, reject) => {
      Car.find({}, (error, cars) => {
        if (error) {
          reject(error);
        } else {
          resolve(cars);
        }
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      Car.findById(id, (error, car) => {
        if (error) {
          reject(error)
        } else {
          resolve(car);
        }
      });
    })
  }

  static create(car) {
    return new Promise((resolve, reject) => {
      Car.create(car)
        .then(result => resolve(result))
        .catch(error => reject(error));
    });
  }

  static updateCar(car) {
    return new Promise((resolve, reject) => {
      Car.findByIdAndUpdate(car._id, car, {new: true}, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static getInUse() {
    return new Promise((resolve, reject) => {
      Car.find({status: 'In use', fuelLevel: {$lt: 80}}, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static getReserved() {
    return new Promise((resolve, reject) => {

    });
  }

}

module.exports = CarsService;
