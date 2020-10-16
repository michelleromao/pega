const { Router } = require('express');

const AnnouncementController = require('../controllers/announcementController');

const announcementsRouter = Router();

announcementsRouter.get('/', AnnouncementController.index);

announcementsRouter.get('/:id', AnnouncementController.show);

announcementsRouter.post('/', AnnouncementController.create);

announcementsRouter.put('/:id', AnnouncementController.update);

announcementsRouter.delete('/:id', AnnouncementController.delete);

module.exports = announcementsRouter;
