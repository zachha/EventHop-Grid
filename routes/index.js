const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');
const { catchErrors } = require('../handlers/errorHandlers');

// Home page for EventHop
router.get('/', catchErrors(eventController.homePage));

// allows flash messages to be carried to the next page with the user
router.get('/flash', function (req, res) {
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('info', 'Flash is back!')
    res.redirect('/');
});

// login and Register pages for EventHop
router.get('/login', userController.loginForm);
//router.post('/login', userController.login);

router.get('/register', userController.registerForm);
router.post('/register', 
userController.validateRegister,
userController.register); /*,
authController.login);
*/

// Events page
router.get('/events', eventController.eventsPage);
router.get('/event/:slug', catchErrors(eventController.getEventBySlug));

// Contact page
router.get('/contact', eventController.contactPage);

// Create page
router.get('/create', eventController.createPage);
//router.post('/create', userController.createGroup);

module.exports = router;