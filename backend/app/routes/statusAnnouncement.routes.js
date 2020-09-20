const { Router } = require('express');

const StatusAnnouncementController = require('../controllers/statusAnnouncementController');

const statusAnnouncementsRouter = Router();

statusAnnouncementsRouter.get('/', StatusAnnouncementController.index);

statusAnnouncementsRouter.get('/:id', StatusAnnouncementController.show);

// statusAnnouncementsRouter.post('/', StatusAnnouncementController.create);

// statusAnnouncementsRouter.put('/:id', StatusAnnouncementController.update);

// statusAnnouncementsRouter.delete('/:id', StatusAnnouncementController.delete);

module.exports = statusAnnouncementsRouter;
