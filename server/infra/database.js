const pg = require('pg');
const client = new pg.Client({
    user: 'postgres',
    password: process.env.PASSWORD,
    host: 'localhost',
    port: 5432,
    database: process.env.DATABASE
})
client.connect()

module.exports = client;