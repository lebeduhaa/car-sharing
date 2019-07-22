const Car = require('../models/car');
const CustomError = require('../classes/error');

class CarsService {
    static getAll() {
        return new Promise((resolve, reject) => {
            Car.find({}, (error, cars) => {
                if (error) {
                    reject(new CustomError(error.message, 500));
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
                    reject(new CustomError(error.message, 500));
                } else
                if (car) {
                    resolve(car);
                } else {
                    reject(new CustomError('Car does not exist!', 404));
                }
            });
        });
    }

    static create(car) {
        return new Promise((resolve, reject) => {
            Car.create(car)
                .then(result => resolve(result))
                .catch(error => reject(new CustomError(error.message, 500)));
        });
    }

    static updateCar(car) {
        return new Promise((resolve, reject) => {
            Car.findByIdAndUpdate(car._id, car, { new: true }, (error, result) => {
                if (error) {
                    reject(new CustomError(error.message, 500));
                } else {
                    resolve(result);
                }
            });
        });
    }

    static getByStatusAndFuel(status, fuel) {
        return new Promise((resolve, reject) => {
            Car.find({ status, fuelLevel: { $lt: Number(fuel) } }, (error, result) => {
                if (error) {
                    reject(new CustomError(error.message, 500));
                } else {
                    resolve(result);
                }
            });
        });
    }

    static getByStatusAndCard(status, card) {
        return new Promise((resolve, reject) => {
            Car.find(
                { status, 'currentRun.driver.creditCard': card === 'true' ? {$ne: null} : null },
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

    static putStatus(date, mileage, status) {
        return new Promise((resolve, reject) => {
            Car.updateMany(
                {
                    $or: [
                        { 'productionInfo.date': { $lt: new Date(date) } },
                        { mileage: { $gte: Number(mileage) } }
                    ]
                },
                { status: status },
                (error, result) => {
                    if (error) {
                        reject(new CustomError(error.message, 500));
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    }

    static putBookedLocation(latitude, longitude) {
        return new Promise((resolve, reject) => {
            Car.updateMany(
                {
                    $and: [
                        { bookingsHistory: { $gte: { $size: 2 } } },
                        { status: { $ne: 'Reserved' } },
                        { status: { $ne: 'In use' } }
                    ]
                },
                { location: [Number(latitude), Number(longitude)] },
                (error, result) => {
                    if (error) {
                        reject(new CustomError(error.message, 500));
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            Car.deleteOne({ _id: id }, (error, result) => {
                if (error) {
                    reject(error);
                } else
                if (result.deletedCount) {
                    resolve(result);
                } else {
                    reject(Error('Car does not exist!'));
                }
            });
        });
    }
}

module.exports = CarsService;
