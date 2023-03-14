const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const message = require("./model/message")

require("dotenv").config();
const app = express()


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(__dirname));


module.exports = app;