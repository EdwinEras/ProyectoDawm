let {Pool} = require("pg");

const pool = new Pool({
    host = 'localhost',
    user = 'postgres',
    passowrd = 'pass',
    database = 'littlecake',
    port = '5432'
});

module.exports = pool;