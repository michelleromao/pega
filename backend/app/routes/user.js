const { Router } = require("express");

const users = require("../controllers/user");

const usersRouter = Router();

usersRouter.get("/", (request, response) => {
  response.json(users);
});

usersRouter.get("/:id", (request, response) => {
  const id = request.params.id;
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    response
      .status(400)
      .send("Ah! Algo de ruim aconteceu, esse user não existe aqui.");
  }
});

module.exports = usersRouter;
