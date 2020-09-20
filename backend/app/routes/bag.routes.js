const { Router } = require('express');

const BagController = require('../controllers/bagController');

const bagsRouter = Router();

bagsRouter.get('/', BagController.index);

bagsRouter.get('/:id', BagController.show);

bagsRouter.post('/', BagController.create);

// usersRouter.put('/:id', BagController.update);

// usersRouter.delete('/:id', BagController.delete);

module.exports = bagsRouter;
