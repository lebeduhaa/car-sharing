const router = require('express').Router();
const CarsController = require('../controllers/cars');
const validator = require('../middlewares/validator');
const schemas = require('../validation-schemas');
const bodyValidator = require('../middlewares/body-validator');
const queryValidator = require('../middlewares/query-validator');
const paramsValidator = require('../middlewares/params-validator');
const tryCatch = require('../middlewares/try-catch');

router.get(
  '/status-fuel',
  queryValidator, 
  validator(schemas.statusFuel), 
  tryCatch(CarsController.getCarsByStatusAndFuel)
);
router.get(
  '/status-card',
  queryValidator,
  validator(schemas.statusCard),
  tryCatch(CarsController.getCarsByStatusAndCard)  
);
router.get(
  '/:id',
  paramsValidator,
  validator(schemas.id),
  tryCatch(CarsController.getCar)
);
router.get(
  '/',
  tryCatch(CarsController.getCars)
);
router.post(
  '/',
  bodyValidator,
  validator(schemas.car),
  tryCatch(CarsController.postCar)
);
router.put(
  '/status',
  queryValidator,
  validator(schemas.putStatus),
  tryCatch(CarsController.putCarsStatus)
);
router.put(
  '/location',
  queryValidator,
  validator(schemas.location),
  tryCatch(CarsController.putCarsLocation)  
);
router.put(
  '/',
  bodyValidator,
  validator(schemas.car),
  tryCatch(CarsController.putCar)
);
router.delete(
  '/:vin',
  paramsValidator,
  validator(schemas.delete),
  tryCatch(CarsController.deleteCar)
);

module.exports = router;
