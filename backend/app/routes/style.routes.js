const { Router } = require('express');

const StyleController = require('../controllers/styleController');

const styleRouter = Router();

styleRouter.get('/', StyleController.index);

styleRouter.get('/:id', StyleController.show);

styleRouter.post('/', StyleController.create);

styleRouter.put('/:id', StyleController.update);

styleRouter.delete('/:id', StyleController.delete);

module.exports = styleRouter;
