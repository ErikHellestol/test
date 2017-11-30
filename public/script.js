// JavaScript Document

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ec2-46-137-174-67.eu-west-1.compute.amazonaws.com",
  user: "ybyncykjxyctqo",
  password: "02d96d972d10c154bf3524ee74dbefa3543ebec61049e3db4f7eae9114956db0",
  database: "d34eo2gvf0u1tf"
});

var usernameT = document.getElementById('username');
var passwordT = document.getElementById('password');
var nameT = document.getElementById('name');
var btnT = document.getElementById('btn');
var msgT = document.getElementById('msg');

btnT.addEventListener("click", function() {
	
con.connect(function(err) {
  if (err) throw err;
  msgT.innerHTML = "Det har skjedd noe feil :'(";
  //Insert a record in the "customers" table:
  var sql = "INSERT INTO accounts (username, password, name) VALUES (" + usernameT.value + ", " + passwordT.value + ", " + nameT.value + ")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    msgT.innerHTML = "Bruker er laget";
      console.log("Dette funker");
  });
});
});