// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// module.exports = app;
// const createError = require("http-errors");

const express = require("express");
const path = require("path");
const logger = require("morgan");

const indexRouter = require("./routes/index");

const app = express();

// view engine setup
// Serve static files from the React app
// app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.static(path.join(__dirname, "./")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(`/api/`, indexRouter);

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});

module.exports = app;
