const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models/database.js');
const bcrypt = require('bcrypt');


module.exports = (passport) => {
    passport.use('local-register', new LocalStrategy ((username, password, done) => {
        db.query('SELECT id, username, password FROM users WHERE username = $1', [username], (err, res) => {
            if(err){
                return done(err);
            }
            //If user already exists
            if(res.rows.length > 0){
                return done(null, false, { message: "A user with that username already exists" });
            }
            //Create user
            else{
                bcrypt.hash(password, 10, (err, hash) => {
                    db.query('INSERT INTO users(username, password) values($1, $2)', [username, hash], (err, res) => {
                        if(err){
                            console.log(err);
                        }
                        res.send('SUCCES');
                    });
                });
            }
        });
    }));


    passport.use('local-login', new LocalStrategy((username, password, done) => {
        db.query('SELECT id, username, password FROM users WHERE username = $1', [username], (err, res) => {
            if(err){
                return done(err);
            }
            if(res.rows.length > 0){
                bcrypt.compare(password, res.rows[0].password, (err, res) => {
                    if(res){
                        return done(null, { id: res.id, username: res.rows[0].username });
                    }else{
                        return done(null, false, { message: "Incorrect Password" });
                    }
                });
            }else{
                return done(null, false, { message: "Incorrect Username" });
            }
        });
    }   
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser((id, done) => {
        db.query('SELECT id, username FROM users WHERE username = $1', [id], (err, res) => {
            if(err){
                return done(err);
            }
            done(err, res.rows[0]);
        });
    });
}
