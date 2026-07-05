const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/auth");
const app = express();
const authRouter = require("./routes/");

module.exports = app;
