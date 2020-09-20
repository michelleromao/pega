const mongoose = require('mongoose');

const { Schema } = mongoose;

const DeliveryAnnouncements = new Schema({
  idDeliveryAnnoucement: {
    type: String,
    required: true,
  },
  idDelivery: { type: String, required: true },
  idAnnoucement: { type: String, required: true },
});
module.exports = mongoose.model('DeliveryAnnouncements', DeliveryAnnouncements);
