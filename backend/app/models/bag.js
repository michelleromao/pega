const mongoose = require('mongoose');

const { Schema } = mongoose;

const Bags = new Schema({
  idBag: { type: String, required: true },
  idBuyer: { type: String, required: true },
  announcements: { type: [String], required: true },
  idPayment: { type: String, required: true },
  value: { type: Number, required: true },
  idCupom: { type: String, required: false },
  totalValue: { type: Number, required: true },
});

module.exports = mongoose.model('Bags', Bags);
