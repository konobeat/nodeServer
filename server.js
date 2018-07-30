var express = require('express')
var app = express()
var port = process.env.PORT || 8080;

app.get("/", function (req, res) {
    res.send("Welcome!");
});

app.listen(port, function () {
     console.log("App listening on PORT " + port);
});