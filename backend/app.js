<<<<<<< HEAD
<<<<<<< HEAD
=======
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
=======
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
>>>>>>> 41b23fb (new edit)
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
>>>>>>> 7ba97f5 (.env added)
