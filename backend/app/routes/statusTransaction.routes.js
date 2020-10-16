const { Router } = require('express');

const StatusTransactionController = require('../controllers/statusTransactionController');

const statusTransactionRouter = Router();

statusTransactionRouter.get('/', StatusTransactionController.index);

statusTransactionRouter.get('/:id', StatusTransactionController.show);

statusTransactionRouter.post('/', StatusTransactionController.create);

module.exports = statusTransactionRouter;
