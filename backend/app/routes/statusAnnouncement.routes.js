const { Router } = require('express');

const StatusAnnouncementController = require('../controllers/statusAnnouncementController');

const statusAnnouncementsRouter = Router();

statusAnnouncementsRouter.get('/', StatusAnnouncementController.index);

statusAnnouncementsRouter.get('/:id', StatusAnnouncementController.show);

statusAnnouncementsRouter.post('/', StatusAnnouncementController.create);

module.exports = statusAnnouncementsRouter;
