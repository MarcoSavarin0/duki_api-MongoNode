const express = require('express');
const router = express.Router();
const controller = require('../controller/auth.controller')
const authJwt = require('../middleware/authJwt')
router.post('/signup', controller.signUp)
router.post('/signin', controller.signIn)




module.exports = router