const router = require('express').Router();
const CarsController = require('../controllers/cars');

router.get('/', CarsController.getCars);

module.exports = router;
