const pg = require('pg');

const client = new pg.Client({
    user: 'testuser',
    host: 'localhost',
    database: 'node_authentication',
    password: '123456',
    port: 5432,
});

client.connect((err) => {
    console.log(err);
});


client.query('CREATE TABLE users(id SERIAL PRIMARY KEY, username TEXT, password TEXT)', (err, res) => {
    console.log(err, res)
    client.end()
});
