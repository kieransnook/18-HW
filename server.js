const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
require('dotenv').config()

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_m4lpdprt:3697fcgnbnmgj437nkn18a9116@ds151431.mlab.com:51431/heroku_m4lpdprt", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});