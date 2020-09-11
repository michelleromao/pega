const express = require("express");
const cors = require("cors");

const routes = require("./config/express");
const db = require("./config/database");

const app = express();
app.use(express.json());
app.use(routes);

//db("mongodb://localhost/pegasystem");

app.listen(3333, () => {
  console.log("⭐ Server is running!");
});
