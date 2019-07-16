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

    static async getCarsInUse(request, response, next) {
        try {
            response.send(await CarsService.getInUse());
        } catch (error) {
            next(error);
        }
    }

    static async getReservedCars(request, response, next) {
        try {
            response.send(await CarsService.getReserved());
        } catch (error) {
            next(error);
        }
    }

    static async putCarsInService(request, response, next) {
        try {
            response.send(await CarsService.putInService());
        } catch (error) {
            next(error);
        }
    }

    static async putBookedCarsLocation(request, response, next) {
        try {
            response.send(await CarsService.putBookedLocation());
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
