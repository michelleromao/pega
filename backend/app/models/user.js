const { uuid } = require('uuidv4');

class User {
  constructor({ name, email, senha }) {
    this.idUser = uuid();
    this.name = name;
    this.email = email;
    this.senha = senha;
    this.cpf = undefined;
    this.profilePhoto = 'default.png';
    this.telefone = undefined;
    this.picpay = undefined;
    this.rating = undefined;
    this.interestCategories = [];
    this.reason = undefined;
  }
}

module.exports = User;
