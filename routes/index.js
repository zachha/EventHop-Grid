const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { catchErrors } = require('../handlers/errorHandlers');

// Home page for EventHop
router.get('/', catchErrors(eventController.homePage));

module.exports = router;