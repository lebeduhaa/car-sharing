const CarsService = require('../services/cars');

class CarsController {
    static async getCars(request, response, next) {
        try {
            response.send(await CarsService.getAll());
        } catch (error) {
            next(error);
        }
    }

    static async getCar(request, response, next) {
        try {
            const { id } = request.params;

            response.send(await CarsService.getById(id));
        } catch (error) {
            next(error);
        }
    }

    static async postCar(request, response, next) {
        try {
            const car = request.body;

            response.send(await CarsService.create(car));
        } catch (error) {
            next(error);
        }
    }

    static async putCar(request, response, next) {
        try {
            const car = request.body;

            response.send(await CarsService.updateCar(car));
        } catch (error) {
            next(error);
        }
    }

    static async getCarsByStatusAndFuel(request, response, next) {
        try {
            const { status, fuel } = request.query;

            response.send(await CarsService.getByStatusAndFuel(status, fuel));
        } catch (error) {
            next(error);
        }
    }

    static async getCarsByStatusAndCard(request, response, next) {
        try {
            const { status, card } = request.query;

            response.send(await CarsService.getByStatusAndCard(status, card));
        } catch (error) {
            next(error);
        }
    }

    static async putCarsStatus(request, response, next) {
        try {
            const { date, mileage, status } = request.query;

            response.send(await CarsService.putStatus(date, mileage, status));
        } catch (error) {
            next(error);
        }
    }

    static async putCarsLocation(request, response, next) {
        try {
            const { latitude, longitude } = request.query;

            response.send(await CarsService.putBookedLocation(latitude, longitude));
        } catch (error) {
            next(error);
        }
    }

    static async deleteCar(request, response, next) {
        try {
            const { id } = request.params;

            response.send(await CarsService.delete(id));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = CarsController;
