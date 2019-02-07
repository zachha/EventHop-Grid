const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(eventController.getEvents));

module.exports = router;