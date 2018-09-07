const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');

require('./config/passport')(passport);

const app = express()

const routes = require('./routes/routes')(passport);

const port = process.env.PORT || 8080;

const indexPath = path.join(__dirname, '/dist/index.html')

app.use(express.static(path.join(__dirname, '/dist')));
app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({     
  extended: true
})); 
app.use(cookieParser());

app.use(session({
  secret: 'thisisatestscretyo',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', routes)

app.get('/', (req, res) => {
  res.sendFile(indexPath);
})

app.listen(port, () => console.log('Example app listening on port ' + port));


