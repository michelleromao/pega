const mongoose = require('mongoose');

const { Schema } = mongoose;

const Addresses = new Schema({
  idAddress: { type: String, required: true },
  zipCode: { type: String, required: true },
  street: { type: String, required: true },
  number: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  main: { type: Boolean, required: true },
  idUser: { type: String, required: true },
});

module.exports = mongoose.model('Addresses', Addresses);
