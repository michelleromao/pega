const mongoose = require('mongoose');

const { Schema } = mongoose;

const Users = new Schema({
  idUser: { type: String, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  cpf: { type: String, required: true },
  telefone: { type: String, required: true },
  idImage: { type: String, required: false },
  picpay: { type: String, required: false },
  rating: { type: Number, required: false },
  interestCategories: { type: [String], required: false },
  reason: { type: String, required: false },
});

module.exports = mongoose.model('Users', Users);
