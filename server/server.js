"use strict";
var express = require('express');
var bodyParser = require('body-parser');
//var request = require('request');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();

app.use('/', express.static('dist'));
app.use('/node_modules', express.static('node_modules'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile('index.html',{ root: path.join(__dirname, '../dist') });
});

var server = app.listen(port, function () {
    var port = server.address().port;
    console.log('App is listening on port:' + port);
});