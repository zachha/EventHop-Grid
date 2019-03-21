const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { catchErrors } = require('../handlers/errorHandlers');

// Home page for EventHop
router.get('/', eventController.homePage);

router.get('/flash', function (req, res) {
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('info', 'Flash is back!')
    res.redirect('/');
});

module.exports = router;