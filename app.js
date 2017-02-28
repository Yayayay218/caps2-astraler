var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// require Passport
var passport = require('passport');

// bring in the data model
require('./app_api/models/db');

// bring in the Passport config after model defined
require('./app_api/config/passport');

// bring in the routes for the API
var routesApi = require('./app_api/routes/index');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// Set the app_client folder to serve static resources
app.use(express.static(path.join(__dirname, 'app_client', 'src', 'main')));

// init Passport
app.use(passport.initialize());

// use the API routes
app.use('/api', routesApi);

// Otherwise render the index.html page for the Angular SPA
// This means we don't have to map all of the SPA routes in Express
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, 'app_client', 'src', 'main', 'index.html'));
});

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });


module.exports = app;
