const User = require('../models/user');

class UserController {
  constructor() {
    this.users = [User];
  }

  all() {
    return this.users;
  }

  getUser(id) {
    this.users.map(user => {
      if (id === user.idUser) {
        return user;
      }
      return 'Não há usuário';
    });
  }

  create({ name, email, senha }) {
    const user = new User({ name, email, senha });
    this.users.push(user);
    return user;
  }

  editUser({ id, cpf, name, profilePhoto, email, senha, telefone, picpay }) {
    const user = new User({
      id,
      cpf,
      name,
      profilePhoto,
      email,
      senha,
      telefone,
      picpay,
    });
    this.users.map(userID => {
      if (userID.idUser === id) {
        const index = this.users.indexOf(userID);
        this.users[index] = user;
        return this.users;
      }
      return 'Usuário não encontrado';
    });
  }

  removeUser({ id, reason }) {
    const user = new User({
      id,
      reason,
    });
    this.users.map(userID => {
      if (userID.idUser === id) {
        const index = this.users.indexOf(userID);
        this.users[index] = user;
        return this.users;
      }
      return 'Não foi possível remover o usuário';
    });
  }
}

module.exports = UserController;
