const { Router } = require('express');

const CategoryController = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/', CategoryController.index);

categoryRouter.get('/:id', CategoryController.show);

categoryRouter.post('/', CategoryController.create);

categoryRouter.put('/:id', CategoryController.update);

categoryRouter.delete('/:id', CategoryController.delete);

module.exports = categoryRouter;
