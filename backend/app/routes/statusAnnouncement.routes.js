const { Router } = require('express');

const StatusAnnouncementController = require('../controllers/statusAnnouncementController');

const announcementsRouter = Router();

announcementsRouter.get('/', StatusAnnouncementController.index);

announcementsRouter.get('/:id', StatusAnnouncementController.show);

announcementsRouter.post('/', StatusAnnouncementController.create);

announcementsRouter.put('/:id', StatusAnnouncementController.update);

announcementsRouter.delete('/:id', StatusAnnouncementController.delete);

module.exports = announcementsRouter;
