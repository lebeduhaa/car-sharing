const CarsService = require('../services/cars');

class CarsController {
    static async getCars(request, response) {
        const { page, size } = request.query;

        response.send(await CarsService.getAll(page, size));
    }

    static async getCar(request, response) {
        const { id } = request.params;

        response.send(await CarsService.getById(id));
    }

    static async postCar(request, response) {
        const car = request.body;

        response.send(await CarsService.create(car));
    }

    static async putCar(request, response) {
        const car = request.body;

        response.send(await CarsService.updateCar(car));
    }

    static async getCarsByStatusAndFuel(request, response) {
        const { status, fuel } = request.query;

        response.send(await CarsService.getByStatusAndFuel(status, fuel));
    }

    static async getCarsByStatusAndCard(request, response) {
        const { status, card } = request.query;

        response.send(await CarsService.getByStatusAndCard(status, card));
    }

    static async putCarsStatus(request, response) {
        const { date, mileage, status } = request.body;

        response.send(await CarsService.putStatus(date, mileage, status));
    }

    static async putCarsLocation(request, response) {
        const { latitude, longitude } = request.query;

        response.send(await CarsService.putBookedLocation(latitude, longitude));
    }

    static async deleteCar(request, response) {
        const { vin } = request.params;

        response.send(await CarsService.delete(vin));
    }
}

module.exports = CarsController;
