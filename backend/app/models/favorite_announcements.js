const mongoose = require('mongoose');

const { Schema } = mongoose;

const FavoriteAnnouncements = new Schema({
  idFavoriteAnnouncements: {
    type: String,
    required: true,
  },
  idUser: { type: String, required: true },
  idAnnouncement: { type: String, required: true },
});
module.exports = mongoose.model('FavoriteAnnouncements', FavoriteAnnouncements);
