const pg = require('pg');

const pool = new pg.pool({
    user: 'testuser',
    host: 'localhost',
    database: 'node_authentication',
    password: '123456',
    port: 5432,
});


module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
}
