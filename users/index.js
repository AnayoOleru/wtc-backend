// export the route from here

const express = require('express');
const user = require('./userController');
const validate = require('../middleware/validations');

const router = express.Router();

router.post('/auth/login', validate.validateLogin, user.login);
router.post('/auth/register', validate.validateRegister, user.register);
router.post('/auth/verify', validate.validateEmail, user.verifyMail);
router.get('/auth/confirm/:token', user.confirmMail);

module.exports = router;
