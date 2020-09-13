const { Router } = require('express');

const UserController = require('../controllers/user');

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  try {
    const users = UserController.all();
    return response.json({ users });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.get('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const user = UserController.getUser(id);
    if (user !== 'Não há usuário') {
      return response.json({ user });
    }
    return response.json({ message: 'Nao foi possivel pegar' });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.post('/', (request, response) => {
  try {
    const { name, email, senha } = request.body;
    const createUser = UserController.create({ name, email, senha });
    return response.json(createUser);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.put('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const {
      cpf,
      name,
      profilePhoto,
      email,
      senha,
      telefone,
      picpay,
    } = request.body;
    const editUser = UserController.editUser({
      id,
      cpf,
      name,
      profilePhoto,
      email,
      senha,
      telefone,
      picpay,
    });
    return response.json(editUser);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { reason } = request.body;
    const deleteUser = UserController.removeUser({ id, reason });
    return response.json(deleteUser);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
module.exports = usersRouter;
