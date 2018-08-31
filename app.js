const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const bodyParser = require('body-parser')

const app = express()

var PORT = 8080

const port = process.env.PORT || 8080;

const indexPath = path.join(__dirname, '/index.html')

app.use(express.static(path.join(__dirname, '/public')));
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
})); 
app.use('/', routes)

app.get('/', (req, res) => {
    res.sendFile(indexPath);
})

app.listen(PORT, () => console.log(`Example app listening on port $(PORT)!`));


