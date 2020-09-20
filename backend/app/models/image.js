const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

const { Schema } = mongoose;

const Photos = new Schema({
  idImage: { type: uuid(), required: true },
  filename: { type: String, required: true },
  originalname: { type: String, required: true },
});

module.exports = mongoose.model('Photos', Photos);
