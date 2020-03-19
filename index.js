var express = require('express');
var path = require('path');

var app = express();
app.set('view engine', 'ejs');
app.use("/js", express.static(path.join(__dirname + '/src/')));

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.listen(9999);
