var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); 

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/Routing/apiRoutes.js")(app);
require("./app/Routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

