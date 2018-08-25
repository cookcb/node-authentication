const express = require('express')
const app = express()

var PORT = 8080

const port = process.env.PORT || 8080;
const publicPath = express.static(path.join(__dirname, '../'));

app.use(publicPath);

app.get('/', (req, res) => {
    res.sendFile(indexPath);
})

app.listen(PORT, () => console.log('Example app listening on port 3000!'));

