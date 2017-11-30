var username = document.getElementById('username');
var password = document.getElementById('password');
var name = document.getElementById('name');
var btn = document.getElementById('btn');
var msg = document.getElementById('msg');

function sendJSON(){

var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("result").innerHTML =
       this.responseText;
    }
 };
xmlhttp.open("POST", "http://localhost:5432");
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(JSON.stringify(myData));

}