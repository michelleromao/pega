const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const uploadConfig = require('./app/config/upload');
const routes = require('./app/routes/index');

mongoose.connect('mongodb://localhost:27017/pegasystem', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files/user', express.static(uploadConfig.user.directory));
app.use(
  '/files/announcement',
  express.static(uploadConfig.announcement.directory),
);

app.use(routes);

app.listen(3333, () => {
  console.log('⭐ Server is running!');
});
