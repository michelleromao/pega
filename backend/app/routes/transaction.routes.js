const { Router } = require('express');

const TransactionController = require('../controllers/transactionController');

const transactionRouter = Router();

transactionRouter.get('/', TransactionController.index);

transactionRouter.get('/:id', TransactionController.show);

transactionRouter.put('/:id', TransactionController.update);

module.exports = transactionRouter;
