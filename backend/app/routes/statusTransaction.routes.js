const { Router } = require('express');

const StatusTransactionController = require('../controllers/statusTransactionController');

const announcementsRouter = Router();

announcementsRouter.get('/', StatusTransactionController.index);

announcementsRouter.get('/:id', StatusTransactionController.show);

announcementsRouter.post('/', StatusTransactionController.create);

announcementsRouter.put('/:id', StatusTransactionController.update);

announcementsRouter.delete('/:id', StatusTransactionController.delete);

module.exports = announcementsRouter;
