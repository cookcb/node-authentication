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
                return res.send({ success: false, message: info.message});
            }
            req.logIn(user, (loginErr) => {
                if(loginErr){
                    return res.send({ success: false, message: "Login failed" });
                }   
                return res.send({ success: true, username: user.username, message: "Login Successful" });
            });
        })(req, res, next);
    });

    //LOGIN
    router.post('/login', (req, res, next) => {
        passport.authenticate('local-login', (err, user, info) => {
            if(err){
                return next(err);
            }
            if(!user){
                return res.send(info); 
            }
            req.logIn(user, (loginErr) => {
                if(loginErr){
                    return res.send({ success: false, message: "Login failed" });
                }
                return res.send({ success: true, username: user.username, message: "Login Succesful"});
            })
        })(req, res, next);
    })

    //LOGOUT
    router.post('/logout', (req, res) => {
       req.logOut();
       res.send({ message: "Logout Succesful"})
    })

    //isAuthenticated

    return router;
}