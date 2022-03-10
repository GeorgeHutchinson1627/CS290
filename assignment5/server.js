//downloaded the express framework for node aswell as the express validator and the express body-parser and pug 
//  also watched some videos and tuitorials on the basics of express


console.log('server started');

var express = require('express');
var bodyParser=require('body-parser');
const path= require('path');

var app= express();
app.use(bodyParser.urlencoded({ extended: true })); 
var server=app.listen(3000, callback1);

function callback1(){

    console.log("server working..");
}

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/site.html'));
  });

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '/login.html'));
  });

app.post('/login',function(req,res){
    console.log(req.body.username);
    console.log(req.body.password);
    res.send("Username is " + req.body.username + " Password is " + req.body.password);
    return res.redirect('/login');
});


