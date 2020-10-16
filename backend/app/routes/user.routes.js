const { Router } = require('express');

const UserController = require('../controllers/userController');

const usersRouter = Router();

usersRouter.get('/', UserController.index);

usersRouter.get('/:id', UserController.show);

usersRouter.post('/', UserController.create);

usersRouter.put('/:id', UserController.update);

usersRouter.delete('/:id', UserController.delete);

module.exports = usersRouter;
