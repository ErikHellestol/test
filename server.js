const express = require('express');
const app = express();
var ejs = require('ejs');
var pg = require('pg');
var bodyParser = require('body-parser');


app.use(express.static("./public"));
app.listen(process.env.PORT || 8080, function () { // do something with the port
console.log('Star wars');
/*    
    
app.use(bodyParser.urlencoded({ extended: true }));     
        var conString = process.env.DATABASE_URL || "postgres://iekithysvinquu:c119bf011446076bd1a4432b08137b87f7fd85e33abdfb31e8b68bbe114f260d@ec2-184-73-206-155.compute-1.amazonaws.com:5432/da1curvb0ahodk";
        var client = new pg.Client(conString);
        client.connect();

app.get('/',function(req,res,next){
res.sendfile('public/index.html');
});

app.post('/myaction', function(req, res) {

console.log('req.body');
console.log(req.body);
res.write('You sent the name "' + req.body.username+'".\n');
res.write('You sent the Email "' + req.body.password+'".\n');
res.write('You sent the City "' + req.body.name+'".\n');
res.end()

client.query("Insert into accounts (username,password,name) VALUES ('"+req.body.username+"','"+req.body.password+"','"+req.body.name+"')",function(err, result)      
{                                                      
  if (err)
     throw err; 
});
});
*/