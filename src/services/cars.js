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
      Car.find(
        {status: 'Reserved', 'currentRun.driver.creditCard': null},
        {
          _id: true,
          location: true,
          'currentRun.driver.firstName': true,
          'currentRun.driver.lastName': true,
          'currentRun.driver.licenseNumber': true
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  static putInService() {
    return new Promise((resolve, reject) => {
      Car.updateMany(
        {
          $or: [
            {'productionInfo.date': {$lt: new Date('2017-01-01')}},
            {mileage: {$gte: 100000}}
          ]
        },
        {status: 'In Service'},
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  static putBookedLocation() {
    return new Promise((resolve, reject) => {
      Car.updateMany(
        {
          $and: [
            {bookingsHistory: {$gte: {$size: 2}}},
            {status: {$ne: 'Reserved'}},
            {status: {$ne: 'In use'}}
          ]
        },
        {location: [53.8882836, 27.5442615]},
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      )
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      Car.remove({_id: id}, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

}

module.exports = CarsService;
