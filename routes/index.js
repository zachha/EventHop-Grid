const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');
const { catchErrors } = require('../handlers/errorHandlers');

// Home page for EventHop
router.get('/', catchErrors(eventController.homePage));

router.get('/flash', function (req, res) {
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('info', 'Flash is back!')
    res.redirect('/');
});

// login and Register pages for EventHop
router.get('/login', userController.loginForm);
//router.post('/login', userController.login);

router.get('/register', userController.registerForm);
/* router.post('/register', 
userController.validateRegister,
userController.registerForm,
authController.login);
*/

module.exports = router;