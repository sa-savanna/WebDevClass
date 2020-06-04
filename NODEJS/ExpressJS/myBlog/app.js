var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
const routers = require('./routes/index')
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/nodejs', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());
app.use(session({
  secret: 'test secret',
  resave: false,
  cookie: {
    maxAge: 3600000
  },
  saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())

app.use('/', routers);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5002)
module.exports = app;