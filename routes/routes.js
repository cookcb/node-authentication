const express = require('express');
const router = express.Router();

module.exports = (passport) => {
    //REGISTRATION
    router.post('/register', passport.authenticate('local-register', {
        successRedirect:'/',
        failureRedirect: '/register',
        failureFlash: true
    }));

    //LOGIN

    //HOMEPAGE

    //isAuthenticated

    return router;
}