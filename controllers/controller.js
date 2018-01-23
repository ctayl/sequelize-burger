var express = require('express');

var router = express.Router();

// Import the model to use its database functions.
var db = require("../models");


router.post("/api/new", function (req, res) {
    console.log("path hit");
    db.burger.create({
        burger_name: req.body.burger_name
    }).then( function (data) {
        res.json(data);
    });
});

router.put("/eat/:id", function (req, res) {
    db.burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.sendStatus(200);
    });
});

router.put("/make/:id", function (req, res) {
    db.burger.update({
        devoured: false
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.sendStatus(200);
    });
});

router.delete("/remove/:id", function (req, res) {
    db.burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.sendStatus(200);
    });
});

router.get("/api/all", function (req, res) {
    db.burger.findAll({}).then(function (data) {
        res.json(data);
    });
});

router.get("*", function (req, res) {
    console.log("===========================================");
    db.burger.findAll({}).then(function (data) {
        res.render("all", {data});
    });
});

module.exports = router;