const { Router } = require('express');

const DeliveryController = require('../controllers/deliveryController');

const deliveryRouter = Router();

deliveryRouter.get('/', DeliveryController.index);

deliveryRouter.get('/:id', DeliveryController.show);
deliveryRouter.post('/', DeliveryController.create);

module.exports = deliveryRouter;
