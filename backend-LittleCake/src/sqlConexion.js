let {Pool} = require("pg");

const pool = new Pool({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'littlecake',
    port: 5432
});

module.exports = pool;