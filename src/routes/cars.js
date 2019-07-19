const router = require('express').Router();
const CarsController = require('../controllers/cars');
const validator = require('../middlewares/validator');
const schemas = require('../schemas');
const bodyValidator = require('../middlewares/body-validator');
const queryValidator = require('../middlewares/query-validator');

router.get('/status-fuel', queryValidator, validator(schemas.statusFuel), CarsController.getCarsByStatusAndFuel);
router.get('/status-card', queryValidator, validator(schemas.statusCard), CarsController.getCarsByStatusAndCard);
router.get('/:id', CarsController.getCar);
router.get('/', CarsController.getCars);
router.post('/', bodyValidator, validator(schemas.car), CarsController.postCar);
router.put('/status',queryValidator, validator(schemas.putStatus), CarsController.putCarsStatus);
router.put('/location', queryValidator, validator(schemas.location), CarsController.putCarsLocation);
router.put('/', bodyValidator, validator(schemas.car), CarsController.putCar);
router.delete('/:id', CarsController.deleteCar);

module.exports = router;
