const passport = require('passport');
const crypto = require('crypto');
const promisify = require('es6-promisify');
const mail = require('../handlers/mail');