var connection = require('./connection');

var orm = {
    selectAll: function (table, callback) {

        var query = "SELECT * FROM ??;";

        connection.query(query, [table], function (err, data) {
            if (err) throw err;
            callback(data);
        });
    },

    insertInto: function (table, data, callback) {

        var query = "INSERT INTO ?? (burger_name, devoured) VALUES (?, false);";
        console.log(data);
        connection.query(query, [table, data], function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    update: function (table, id, col, val, callback) {

        var query = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(query, [table, col, val, id], function (err, res) {
            if (err) throw err; 4
            callback(res);
        });
    },

    remove: function (table, id, callback) {

        var query = "DELETE FROM ?? WHERE id = ?";
        connection.query(query, [table, id], function (err, res) {
            if (err) throw err;
            callback(res);
        });
    }
};

module.exports = orm;