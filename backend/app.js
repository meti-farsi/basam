<<<<<<< HEAD
const express = require("express");
const path = require("path");
const cors = require("cors")
const authRouter = require("./routes/auth");
const bodyParser = require("body-parser");
=======
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/auth');
>>>>>>> 3386527 (fix bugs)
const app = express();

app.use('/courses/covers', express.static(path.join(__dirname, "public",'courses',"covers")))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

<<<<<<< HEAD
=======
app.use('/auth', usersRouter);
>>>>>>> 3386527 (fix bugs)

app.use("/auth",authRouter)

module.exports = app;
