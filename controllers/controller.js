var express = require('express');

var router = express.Router();

// Import the model to use its database functions.
var db = require("../models");


router.post("/api/new", function (req, res) {

});

router.put("/eat/:id", function (req, res) {

});

router.put("/make/:id", function (req, res) {

});

router.delete("/remove/:id", function (req, res) {

});

router.get("/api/all", function (req, res) {
    db.burger.findAll({}).then(function (data) {
        res.json(data);
    });
});

router.get("/", function (req, res) {

});

router.get("*", function (req, res) {
    
});

module.exports = router;