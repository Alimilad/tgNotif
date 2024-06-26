var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var digiRouter = require('./routes/digi');
var walletRouter = require('./routes/wallet');
var fileRouter = require('./routes/file');
var ordersRouter = require('./routes/orders');

var app = express();
app.listen(443);
// var server = http.createServer(app);
// server.listen(443);


app.use(express.json({ limit: 10000 }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/tgdigi', digiRouter);
app.use('/wallet', walletRouter);
app.use('/file', fileRouter);
app.use('/orders', ordersRouter);

module.exports = app;
