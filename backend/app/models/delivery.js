const mongoose = require('mongoose');

const { Schema } = mongoose;

const Deliveries = new Schema({
  idDelivery: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model('Deliveries', Deliveries);
