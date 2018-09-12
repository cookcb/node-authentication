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
            req.logIn(user, loginErr => {
                if(loginErr){
                    return res.send({ success: false, message: "Login failed" });
                }   
                console.log(res);
                return res.send({ success: true, username: res.body.username, message: "Login Successful" });
            });
        })(req, res, next);
    });

    //LOGIN

    //LOGOUT

    
    //HOMEPAGE
    /*router.get('/', (req, res) => {
        res.sendFile(indexPath);
    })*/
    //isAuthenticated

    return router;
}