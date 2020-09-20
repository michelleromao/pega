const { Router } = require('express');

const TransactionController = require('../controllers/transactionController');

const transactionRouter = Router();

transactionRouter.get('/', TransactionController.index);

transactionRouter.get('/:id', TransactionController.show);

// transactionRouter.post('/', TransactionController.create);

transactionRouter.put('/:id', TransactionController.update);

// transactionRouter.delete('/:id', TransactionController.delete);

module.exports = transactionRouter;
