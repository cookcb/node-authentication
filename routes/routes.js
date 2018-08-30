const db = require('../models/database.js');
const express = require('express');
const routes = express.Router();


routes.route('/register').post((req, res, next) => {
    db.query('INSERT INTO users(username, password) values($1, $2)', [req.body.username, req.body.password], (err, res) => {
        if(err){
            console.log(err);
        }
    });
    res.send('SUCCES');
});

module.exports = routes;