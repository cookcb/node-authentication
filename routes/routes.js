const express = require('express');
const router = express.Router();

module.exports = (passport) => {
    //REGISTRATION
    router.post('/register', passport.authenticate('local-register', {
        successRedirect:'/login.html',
        failureRedirect: '/register.html',
        failureFlash: true
    }));

    //LOGIN

    //HOMEPAGE
    router.get('/', (req, res) => {
        res.sendFile(indexPath);
    })
    //isAuthenticated

    return router;
}