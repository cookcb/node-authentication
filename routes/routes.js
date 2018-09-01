const db = require('../models/database.js');
const express = require('express');
const routes = express.Router();
const bcrypt = require('bcrypt');

routes.route('/register').post((req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        db.query('INSERT INTO users(username, password) values($1, $2)', [req.body.username, hash], (err, res) => {
            if(err){
                console.log(err);
            }
        });
        res.send('SUCCES');
    });
});

module.exports = routes;