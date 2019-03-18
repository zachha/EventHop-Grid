const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');
const flash = require('connect-flash');
const expressValidator = require('express-validator');
const MySQLStore = require('connect-session-sequelize')(session.Store);
const routes = require('./routes/index');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers');
const db = require('./models');
require('./handlers/passport');

// create Express app
const app = express();

// setup view engine
app.set('views', path.join(__dirname, 'views'));
// using the pug engine, pug files kept in views folder
app.set('view engine', 'pug');

// serves static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// turn raw requests into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// allows use of several validation methods for user input
app.use(expressValidator());

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());


// set up for user sessions to keep them logged in and send flash messages
const sessionStore = new MySQLStore({
    db: db.sequelize
});

app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}));

sessionStore.sync();

/* 
CHECKS TO SEE IF DB CONNECTION IS WORKING

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

*/

// user authentication is done via Passport JS
//app.use(passport.initialize());
//app.use(passport.session());

// Flash middleware lets us use req.flash for errors or success boxes that follow the user to the requested page
app.use(flash());

// passes variables to templates and requests
app.use((req, res, next) => {
    res.locals.h = helpers;
    res.locals.flashes = req.flash();
    res.locals.user = req.user || null;
    res.locals.currentPath = req.path;
    next();
});

/*
// promisify some callback based APIs
app.use((req, res, next) => {
    //req.login = promisify(req.login, req);
    next();
});
*/

// handle our routes
app.use('/', routes);

// if routes didnt work, they get 404d and forwarded to error handler
app.use(errorHandlers.notFound);

// this error handler will check for validation errors
app.use(errorHandlers.flashValidationErrors);

// if still not handled, the error will print the stack trace
if (app.get('env') === 'development') {
    app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

// export app.js 
module.exports = app;