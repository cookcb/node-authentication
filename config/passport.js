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
