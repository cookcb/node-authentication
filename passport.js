const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models/database.js');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy((username, password, done) => {
    db.query('SELECT id, username, password FROM users WHERE username = $1', [username], (err, res) => {
        if(err){
            return done(err);
        }
        if(res.rows.length > 0){
            bcrypt.compare(password, res.password, (err, res) => {
                if(res){
                    return done(null);
                }else{
                    return done(null, false);
                }
            })
        }
    });
}   
));
