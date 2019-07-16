const router = require('express').Router();
const CarsController = require('../controllers/cars');

router.get('/in-use', CarsController.getCarsInUse);
router.get('/', CarsController.getCars);
router.get('/:id', CarsController.getCar);
router.post('/', CarsController.postCar);
router.put('/', CarsController.putCar);

module.exports = router;
