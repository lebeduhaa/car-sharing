const CarRepository = require('../repositories/car');

class CarsService {
    static async getAll(page, size) {
        return await CarRepository.getAll(page, size);
    }

    static async getById(id) {
        return await CarRepository.getById(id);
    }

    static async create(car) {
        return await CarRepository.create(car);
    }

    static async updateCar(car) {
        return await CarRepository.update(car);
    }

    static async getByStatusAndFuel(status, fuel) {
        return await CarRepository.getByStatusAndFuel(status, fuel);
    }

    static async getByStatusAndCard(status, card) {
        return await CarRepository.getByStatusAndCard(status, card);
    }

    static async putStatus(date, mileage, status) {
        return await CarRepository.putStatus(date, mileage, status);
    }

    static async putBookedLocation(latitude, longitude) {
        return await CarRepository.putBookedLocation(latitude, longitude);
    }

    static async delete(vin) {
        return await CarRepository.delete(vin);
    }
}

module.exports = CarsService;
