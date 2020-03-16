var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/tariffRoutes');
routes(app);


app.listen(port);
console.log('Tariff REST API started on port ' + port);