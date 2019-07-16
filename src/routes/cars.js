const router = require('express').Router();
const CarsController = require('../controllers/cars');
const validator = require('../middlewares/validator');
const schemas = require('../schemas');

router.get('/in-use', CarsController.getCarsInUse);
router.get('/reserved', CarsController.getReservedCars);
router.get('/:id', CarsController.getCar);
router.get('/', CarsController.getCars);
router.post('/', validator(schemas.car), CarsController.postCar);
router.put('/to-service', CarsController.putCarsInService);
router.put('/booked-location', CarsController.putBookedCarsLocation);
router.put('/', validator(schemas.car), CarsController.putCar);
router.delete('/:id', CarsController.deleteCar);

module.exports = router;
