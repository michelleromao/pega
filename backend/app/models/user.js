const { uuid } = require('uuidv4');

class User {
  constructor({ name, email, senha }) {
    this.idUser = uuid();
    this.name = name;
    this.email = email;
    this.senha = senha;
    this.cpf = '';
    this.profilePhoto = '';
    this.telefone = '';
    this.picpay = '';
    this.address = '';
    this.rate = '';
    this.reason = '';
  }
}

module.exports = User;
