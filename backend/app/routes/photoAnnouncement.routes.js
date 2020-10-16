const { Router } = require('express');

const multer = require('multer');
const uploadConfig = require('../config/upload');

const upload = multer(uploadConfig.announcement);

const PhotoAnnouncementController = require('../controllers/photoAnnouncementController');

const photoAnnouncementRouter = Router();

photoAnnouncementRouter.get('/', PhotoAnnouncementController.index);

photoAnnouncementRouter.get('/:id', PhotoAnnouncementController.show);

photoAnnouncementRouter.post(
  '/:id',
  upload.array('image'),
  PhotoAnnouncementController.create,
);

photoAnnouncementRouter.put(
  '/:id',
  upload.array('image'),
  PhotoAnnouncementController.update,
);

module.exports = photoAnnouncementRouter;
