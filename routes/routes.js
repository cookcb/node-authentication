const db = require('../models/database.js');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('config/passport');


//REGISTRATION
router.post('/register', passport.authenticate('local-register', {
    successRedirect:'/',
    failureRedirect: '/register',
    failureFlash: true
}));

//LOGIN

//HOMEPAGE

module.exports = routes;