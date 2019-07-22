const router = require('express').Router();
const CarsController = require('../controllers/cars');
const validator = require('../middlewares/validator');
const schemas = require('../validation-schemas');
const bodyValidator = require('../middlewares/body-validator');
const queryValidator = require('../middlewares/query-validator');
const paramsValidator = require('../middlewares/params-validator');
const requestWrapper = require('../middlewares/request-wrapper');

router.get(
    '/status-fuel',
    queryValidator,
    validator(schemas.statusFuel),
    requestWrapper(CarsController.getCarsByStatusAndFuel)
);
router.get(
    '/status-card',
    queryValidator,
    validator(schemas.statusCard),
    requestWrapper(CarsController.getCarsByStatusAndCard)
);
router.get(
    '/:id',
    paramsValidator,
    validator(schemas.id),
    requestWrapper(CarsController.getCar)
);
router.get(
    '/',
    requestWrapper(CarsController.getCars)
);
router.post(
    '/',
    bodyValidator,
    validator(schemas.car),
    requestWrapper(CarsController.postCar)
);
router.put(
    '/status',
    bodyValidator,
    validator(schemas.putStatus),
    requestWrapper(CarsController.putCarsStatus)
);
router.put(
    '/location',
    bodyValidator,
    validator(schemas.location),
    requestWrapper(CarsController.putCarsLocation)
);
router.put(
    '/',
    bodyValidator,
    validator(schemas.car),
    requestWrapper(CarsController.putCar)
);
router.delete(
    '/:vin',
    paramsValidator,
    validator(schemas.delete),
    requestWrapper(CarsController.deleteCar)
);

module.exports = router;
