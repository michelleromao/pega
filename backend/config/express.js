const { Router } = require("express");

const usersRouter = require("../app/routes/user");
const routes = Router();

routes.use("/users", usersRouter);

module.exports = routes;
