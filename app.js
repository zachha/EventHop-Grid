const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');
const flash = require('connect-flash');
const expressValidator = require('express-validator');
const routes = require('./routes/index');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers');
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
app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    //store: new 
}));

// user authentication is done via Passport JS
app.use(passport.initialize());
app.use(passport.session());

// Flash middleware lets us use req.flash for errors or success boxes that follow the user to the requested page
app.use(flash());

app.use((req, res, next) => {
    res.locals.h = helpers;
    res.locals.flashes = req.flash();
    res.locals.user = req.user || null;
    res.locals.currentPath = req.path;
    next();
});

// promisify some callback based APIs
app.use((req, res, next) => {
    req.login = promisify(req.login, req);
    next();
});

