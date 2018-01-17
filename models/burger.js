var orm = require("../config/orm");
// var connection = require("../config/connection");

var burger = {

    // gets all burgers
    all: function (callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    // makes a new burger
    new: function (name, callback) {
        orm.insertInto("burgers", name, function(res) {
            callback(res);
        });
    },

    // changes the value of "devoured" to true
    eat: function (id, callback) {
        orm.update("burgers", id, "devoured", true, function (res) {
            callback(res);
        });
    },

    // changes the value of "devoured" to false
    make: function (id, callback) {
        orm.update("burgers", id, "devoured", false, function (res) {
            callback(res);
        });
    },

    // removes a burger from the database
    remove: function (id, callback) {
        orm.remove("burgers", id, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;






// module.exports = function (app) {

//     app.get("/", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/index.html"))
//     });

//     app.get("/test", function(req, res) {
//         res.render("test", {test: "test"})
//     });

//     app.get("/api/all", function(req, res) {
//         orm.selectAll("burgers", function (data) {
//             console.log(data);
//             res.json(data);
//         });
//     });
    
//     app.post("/api/new", function (req, res) {
//         console.log(req.body)
//         orm.insertInto("burgers", req.body, function(data) {
//             res.json(data);
//         });
//     });

// }