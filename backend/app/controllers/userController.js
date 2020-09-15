const User = require('../models/user');

const users = [];

class UserController {
  static index(request, response) {
    try {
      return response.json(users);
    } catch (err) {
      return err;
    }
  }

  static show(request, response) {
    try {
      const id = request.params;
      const user = users.find(u => {
        if (u.idUser === id) {
          return u;
        }
        return null;
      });
      if (!user) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar esse usuário' });
      }

      return response.json(user);
    } catch (err) {
      return err;
    }
  }

  static create(request, response) {
    try {
      const { name, email, senha } = request.body;
      const userExist = users.find(u => {
        if (u.email === email) {
          return u;
        }
        return undefined;
      });

      if (!userExist) {
        const user = new User({ name, email, senha });
        users.push(user);
        return response.json(user);
      }
      return response.status(401).json({ message: 'E-mail já existente :(' });
    } catch (err) {
      return err;
    }
  }

  static update(request, response) {
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

      const user = {
        id,
        cpf,
        name,
        profilePhoto,
        email,
        senha,
        telefone,
        picpay,
      };

      const index = users.findIndex((u, i) => {
        if (u.idUser === id) {
          return i;
        }
        return null;
      });

      if (!index) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar esse usuário' });
      }

      const emailExist = users.find(u => {
        if (u.idUser !== id && u.email === email) {
          return u;
        }
        return null;
      });

      if (emailExist) {
        return response
          .status(400)
          .json({ message: 'Epa! Esse e-mail já está na nossa plataforma' });
      }

      const cpfExist = users.find(u => {
        if (u.idUser !== id && u.cpf === cpf) {
          return u;
        }
        return null;
      });

      if (cpfExist) {
        return response
          .status(400)
          .json({ message: 'Epa! Esse CPF já está na nossa plataforma ' });
      }

      users[index] = user;
      return response.json(user);
    } catch (err) {
      return err;
    }
  }

  static delete(request, response) {
    try {
      const { id } = request.params;
      const { reason } = request.body;
      const user = {
        id,
        reason,
      };

      const index = users.findIndex((u, i) => {
        if (u.idUser === id) {
          return i;
        }
        return null;
      });

      if (!index) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar esse usuário' });
      }

      users[index] = user;
      return response.json(user);
    } catch (err) {
      return err;
    }
  }
}

module.exports = UserController;
