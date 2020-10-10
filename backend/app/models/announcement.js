const mongoose = require('mongoose');

const { Schema } = mongoose;

const Announcements = new Schema({
  idAnnouncement: { type: String, required: true },
  title: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true },
  state: { type: String, required: true },
  description: { type: String, required: true },
  tryOn: { type: Boolean, required: true },
  initPrice: { type: Number, required: true },
  offert: { type: Boolean, required: false },
  valueOffert: { type: Number, required: false },
  idOwner: { type: String, required: true },
  nameOwner: { type: String, required: true },
  telOwner: { type: String, required: true },
  idStyle: { type: String, required: true },
  idCategory: { type: String, required: true },
  deliveryType: { type: String, required: true },
  priceDelivery: { type: Number, required: true },
  paymentType: { type: String, required: true },
  idStatus: { type: String, required: true },
});

module.exports = mongoose.model('Announcements', Announcements);
