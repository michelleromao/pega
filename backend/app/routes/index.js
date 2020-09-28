const { Router } = require('express');

const usersRoutes = require('./user.routes');
const announcementsRoutes = require('./announcements.routes');
const bagsRoutes = require('./bag.routes');
const transactionsRoutes = require('./transaction.routes');

const styleRoutes = require('./style.routes');
const categoryRoutes = require('./category.routes');

const paymentRoutes = require('./payment.routes');
const deliveryRoutes = require('./delivery.routes');
const statusAnnouncementsRoutes = require('./statusAnnouncement.routes');
const statusTransactionRoutes = require('./statusTransaction.routes');

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/announcements/', announcementsRoutes);

routes.use('/bags/', bagsRoutes);
routes.use('/transactions/', transactionsRoutes);

routes.use('/styles/', styleRoutes);
routes.use('/categories/', categoryRoutes);

routes.use('/payments/', paymentRoutes);
routes.use('/deliveries/', deliveryRoutes);

routes.use('/statusannouncements/', statusAnnouncementsRoutes);
routes.use('/statustransactions/', statusTransactionRoutes);

module.exports = routes;