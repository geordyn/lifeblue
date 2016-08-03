//////requirements//////
var express = require('express');
var app = express();
var port = process.env.PORT || 4952;

app.use(express.static(__dirname + "/public"));


app.listen(port, function(){
    console.log("Now listening on port " + port);
})
