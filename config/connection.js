// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection;

if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
        port: 3000,
        host: "localhost",
        user: "root",
        password: "NU2018",
        database: "burgers_db"
    });
};
// Connect to the database
connection.connect(function(err) {
    if (err) {
        console.error("error mysql connecting: " + err.stack);
        return;
    }
    console.log("connected to mysql as id " + connection.threadId);
});

// Export connection for the ORM use
module.exports = connection;