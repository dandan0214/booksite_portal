var express = require('express');
var path = require('path');
var app = express();
var engines = require('consolidate');

// view engine setup
app.set('views', './views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(3000);



