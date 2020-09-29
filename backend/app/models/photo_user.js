const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

const { Schema } = mongoose;

const PhotosUsers = new Schema({
  idImage: { type: String, required: true },
  filename: { type: String, required: false },
  originalname: { type: String, required: false },
  idUser: { type: String, required: true },
});

module.exports = mongoose.model('PhotosUsers', PhotosUsers);
