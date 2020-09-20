const mongoose = require('mongoose');

const { Schema } = mongoose;

const DeliveryAnnouncements = new Schema({
  idDeliveryAnnouncement: {
    type: String,
    required: true,
  },
  idDelivery: { type: String, required: true },
  idAnnouncement: { type: String, required: true },
});
module.exports = mongoose.model('DeliveryAnnouncements', DeliveryAnnouncements);
