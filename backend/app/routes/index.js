const { Router } = require('express');

const usersRoutes = require('./user.routes');
const announcementsRoutes = require('./announcements.routes');
const bagsRoutes = require('./bag.routes');
const styleRoutes = require('./style.routes');
const paymentRoutes = require('./payment.routes');
const deliveryRoutes = require('./delivery.routes');
const statusAnnouncementsRoutes = require('./statusAnnouncement.routes');
const statusTransactionRoutes = require('./statusTransaction.routes');

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/announcements/', announcementsRoutes);
routes.use('/bags/', bagsRoutes);
routes.use('/styles/', styleRoutes);
routes.use('/payments/', paymentRoutes);
routes.use('/deliveries/', deliveryRoutes);
routes.use('/statusannouncements/', statusAnnouncementsRoutes);
routes.use('/statustransactions/', statusTransactionRoutes);

module.exports = routes;
