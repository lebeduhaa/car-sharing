const router = require('express').Router();
const CarsController = require('../controllers/cars');

router.get('/in-use', CarsController.getCarsInUse);
router.get('/reserved', CarsController.getReservedCars);
router.get('/:id', CarsController.getCar);
router.get('/', CarsController.getCars);
router.post('/', CarsController.postCar);
router.put('/to-service', CarsController.putCarsInService);
router.put('/booked-location', CarsController.putBookedCarsLocation);
router.put('/', CarsController.putCar);
router.delete('/:id', CarsController.deleteCar);

module.exports = router;
