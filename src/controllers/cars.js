const CarsService = require('../services/cars');

class CarsController {

  static async getCars(request, response, next) {
    try {
      response.send(await CarsService.getCars());
    } catch (error) {
      next(error);
    }
  }

}

module.exports = CarsController;
