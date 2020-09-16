const { Router } = require('express');

const usersRoutes = require('./user.routes');
const announcementsRoutes = require('./announcements.routes');

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/announcements/', announcementsRoutes);

module.exports = routes;
