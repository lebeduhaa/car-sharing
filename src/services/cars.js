const CustomError = require('../classes/error');
const CarRepository = require('../repositories/car');

class CarsService {
    static async getAll() {
        return await CarRepository.getAll();
    }

    static getById(id) {
        return await CarRepository.getById();
    }

    static create(car) {
        return await CarRepository.create();
    }

    static updateCar(car) {
        return await CarRepository.update();
    }

    static getByStatusAndFuel(status, fuel) {
        return await CarRepository.getByStatusAndFuel(status, fuel);
    }

    static getByStatusAndCard(status, card) {
        return await CarRepository.getByStatusAndCard(status, card);
    }

    static putStatus(date, mileage, status) {
       return await CarRepository.putStatus(date, mileage, status);
    }

    static putBookedLocation(latitude, longitude) {
        return await CarRepository.putBookedLocation(latitude, longitude);
    }

    static delete(vin) {
        return await CarRepository.delete(vin);
    }
}

module.exports = CarsService;
