const express = require('express');
const path = require('path');

const app = express()

var PORT = 8080

const port = process.env.PORT || 8080;

const indexPath = path.join(__dirname, '/index.html')

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(indexPath);
})

app.listen(PORT, () => console.log(`Example app listening on port $(PORT)!`));


