const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const passport = require('passport');
require('./config/passport')(passport);

const app = express()

const routes = require('./routes/routes')(passport);

const port = process.env.PORT || 8080;

const indexPath = path.join(__dirname, '/index.html')

app.use(express.static(path.join(__dirname, '/public')));
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
})); 
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes)

app.get('/', (req, res) => {
    res.sendFile(indexPath);
})

app.listen(port, () => console.log('Example app listening on port ' + port));


