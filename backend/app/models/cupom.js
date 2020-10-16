const mongoose = require('mongoose');

const { Schema } = mongoose;

const Cupoms = new Schema({
  idCupom: { type: String, required: true },
  name: { type: String, required: true },
  code: { type: String, required: true },
  value: { type: Number, required: true },
  quantity: { type: Number, required: true },
});
module.exports = mongoose.model('Cupoms', Cupoms);
