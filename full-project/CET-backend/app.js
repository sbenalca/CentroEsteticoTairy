var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bodyParser = require("body-parser");
const cors = require("cors");

var indexRouter = require('./routes/index');
var comentariosRouter = require('./routes/comentario.routes');
var promocionesRouter = require('./routes/promocion.routes');
var personasRouter = require('./routes/personas.routes');
var citasRouter = require('./routes/cita.routes');
var areaRouter = require('./routes/area.routes');
var servicioRouter = require('./routes/servicios.routes');
var tiposervicioRouter = require('./routes/tiposervicio.routes');
var citasRouter = require('./routes/cita.routes');

const nodb = require("./collections");
var app = express();

const db = require("./models");

var corsOptions = {origin: "http://localhost:4200"};

app.use(cors(corsOptions)); 

// parse requests of content-type - application/json
app.use(bodyParser.json()); 

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({​​​​​​​​extended: true}​​​​​​​​));
app.use(bodyParser.urlencoded({extended:true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/comentarios', comentariosRouter);
app.use('/promociones', promocionesRouter);
app.use('/personas', personasRouter);
app.use('/areas', areaRouter);
app.use('/servicios', servicioRouter);
app.use('/tiposervicios', tiposervicioRouter);
<<<<<<< HEAD
app.use('/cita',citasRouter);
=======
app.use('/citas', citasRouter);
>>>>>>> 00be01c6446c471496856bc64150ff77deb0b8a4

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
