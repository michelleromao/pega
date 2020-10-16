const { Router } = require('express');
const AuthenticateController = require('../controllers/authenticateController');

const authenticateRouter = Router();

authenticateRouter.post('/', AuthenticateController.show);
module.exports = authenticateRouter;
