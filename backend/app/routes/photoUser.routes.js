const { Router } = require('express');

const multer = require('multer');
const uploadConfig = require('../config/upload');

const upload = multer(uploadConfig.user);

const PhotoUserController = require('../controllers/photoUserController');

const photoUsersRouter = Router();

photoUsersRouter.get('/', PhotoUserController.index);

photoUsersRouter.get('/:id', PhotoUserController.show);

photoUsersRouter.put(
  '/:id',
  upload.single('avatar'),
  PhotoUserController.update,
);

photoUsersRouter.delete('/:id', PhotoUserController.delete);

module.exports = photoUsersRouter;
