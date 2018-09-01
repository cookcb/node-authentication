const db = require('../models/database.js');
const express = require('express');
const routes = express.Router();
const bcrypt = require('bcrypt');
const passport = require('config/passport');


//REGISTRATION
routes.route('/register').post((req, res, next) => {
    passport.authenticate('local', () => {

    });
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        db.query('INSERT INTO users(username, password) values($1, $2)', [req.body.username, hash], (err, res) => {
            if(err){
                console.log(err);
            }
        });
        res.send('SUCCES');
    });
});

//LOGIN

//HOMEPAGE

module.exports = routes;