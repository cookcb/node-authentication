const express = require('express');
const router = express.Router();

module.exports = (passport) => {
    //REGISTRATION
    router.post('/register', (req, res, next) => {
        passport.authenticate('local-register', (err, user, info) => {
            if(err){
                return next(err);
            }
            if(!user){
                return res.send(info);
            }
        })(req, res, next);
    });

    //LOGIN

    //HOMEPAGE
    /*router.get('/', (req, res) => {
        res.sendFile(indexPath);
    })*/
    //isAuthenticated

    return router;
}