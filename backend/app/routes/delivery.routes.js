const { Router } = require('express');

const DeliveryController = require('../controllers/deliveryController');

const deliveryRouter = Router();

deliveryRouter.get('/', DeliveryController.index);

deliveryRouter.get('/:id', DeliveryController.show);
// deliveryRouter.post('/', DeliveryController.create);

// deliveryRouter.put('/:id', DeliveryController.update);

// deliveryRouter.delete('/:id', DeliveryController.delete);

module.exports = deliveryRouter;
