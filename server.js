var bp = require('body-parser');

var express = require('express');
var PORT =  process.env.PORT || 3300 ;

var app = express();

app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

app.use(express.static("public"));

var routes = require('./controllers/controller');
app.use(routes);

var handlebars = require('express-handlebars');
app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.listen(PORT, function(){
    console.log(`connected on port ${PORT}`)
});