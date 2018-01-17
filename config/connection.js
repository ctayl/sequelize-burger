var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    var connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "2379",
        database: "burger_db"
    });
};

// mysql://b23c8c3faf7fe5:0991bbf4@us-cdbr-iron-east-05.cleardb.net/heroku_653b7e47d0d9c61?reconnect=true

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    };
    console.log(`connected as ${connection.threadId}`)
});

module.exports = connection;