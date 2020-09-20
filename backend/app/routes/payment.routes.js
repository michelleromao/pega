const { Router } = require('express');

const PaymentController = require('../controllers/paymentController');

const paymentRouter = Router();

paymentRouter.get('/', PaymentController.index);

paymentRouter.get('/:id', PaymentController.show);

// paymentRouter.post('/', PaymentController.create);

// paymentRouter.put('/:id', PaymentController.update);

// paymentRouter.delete('/:id', PaymentController.delete);

module.exports = paymentRouter;
