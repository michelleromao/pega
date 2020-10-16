const { Router } = require('express');

const CategoryController = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/', CategoryController.index);

categoryRouter.get('/:id', CategoryController.show);

categoryRouter.post('/', CategoryController.create);

module.exports = categoryRouter;
