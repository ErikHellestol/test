const express = require('express');
const app = express();



app.use(express.static("./public"));

app.listen(process.env.PORT || 8080, function () { // do something with the port
  console.log('Star wars');
});

console.log("noe tull");
// skjønner ingenting

var express = require('express');
var async = require('async');
var bodyParser = require("body-parser");
var mysql = require('posgresql');
var hostname = 'ec2-184-73-206-155.compute-1.amazonaws.com';
var port = 5432;
var app = express();