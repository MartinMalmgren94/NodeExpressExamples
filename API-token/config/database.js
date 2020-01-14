const { createPool } = require("mysql");
//setting up the database connection
const pool = createPool({
    port: 3306,
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "testToken",
    connectionLimit: 10
})

module.exports = pool;
