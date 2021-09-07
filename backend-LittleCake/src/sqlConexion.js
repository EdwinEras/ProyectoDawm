let {Pool} = require("pg");

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'pass',
    database: 'littlecake',
    port: 5432
});

module.exports = pool;