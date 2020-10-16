const { Router } = require('express');

const authenticateRoutes = require('./authenticate.routes');

const usersRoutes = require('./user.routes');
const photoUsersRoutes = require('./photoUser.routes');
const announcementsRoutes = require('./announcements.routes');
const photoAnnouncementsRoutes = require('./photoAnnouncement.routes');

const bagsRoutes = require('./bag.routes');
const transactionsRoutes = require('./transaction.routes');

const styleRoutes = require('./style.routes');
const categoryRoutes = require('./category.routes');

const paymentRoutes = require('./payment.routes');
const deliveryRoutes = require('./delivery.routes');
const statusAnnouncementsRoutes = require('./statusAnnouncement.routes');
const statusTransactionRoutes = require('./statusTransaction.routes');

const routes = Router();

routes.use('/authenticate/', authenticateRoutes);

routes.use('/users/', usersRoutes);
routes.use('/photosuser/', photoUsersRoutes);
routes.use('/announcements/', announcementsRoutes);
routes.use('/photosannouncement/', photoAnnouncementsRoutes);

routes.use('/bags/', bagsRoutes);
routes.use('/transactions/', transactionsRoutes);

routes.use('/styles/', styleRoutes);
routes.use('/categories/', categoryRoutes);

routes.use('/payments/', paymentRoutes);
routes.use('/deliveries/', deliveryRoutes);

routes.use('/statusannouncements/', statusAnnouncementsRoutes);
routes.use('/statustransactions/', statusTransactionRoutes);

module.exports = routes;
