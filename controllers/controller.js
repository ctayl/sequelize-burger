var express = require('express');

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");



router.post("/api/new", function (req, res) {
    
    burger.new(req.body.burger_name, function (data) {
        
        res.send(data);
    });
});

router.put("/eat/:id", function (req, res) {

    burger.eat(req.params.id, function (data) {

        res.send(data);
    });
});

router.put("/make/:id", function (req, res) {

    burger.make(req.params.id, function (data) {

        res.send(data);
    });
});

router.delete("/remove/:id", function (req, res) {

    burger.remove(req.params.id, function (data) {

        res.send(data);
    });
});

router.get("/api/all", function (req, res) {

    burger.all(function (data) {

        res.send(data);
    });
});

router.get("/", function (req, res) {

    burger.all(function (data) {
       
        var input = {
            data: data
        };
        res.render("all", input);
    });
});

router.get("*", function (req, res) {

    burger.all(function (data) {
       
        var input = {
            data: data
        };
        res.render("all", input);
    });
});
module.exports = router;