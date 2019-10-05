const http = require('http');
const fs = require('fs');
const express = require('express');
var mysql = require('mysql');
const app = express();
const connection = require('./db');

const port = 3000;
const mysqlPort = 3306;
var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


console.log('backend connected at port: ' + port);

app.use('/signup',(req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

 /* console.log('firstName: ' + req.body.firstName);
  console.log('lastName: ' + req.body.lastName);
  console.log('email: ' + req.body.email);
  console.log('password :' + req.body.password);*/

 var firstname = req.body.firstName;
 var lastname = req.body.lastName;
 var email = req.body.email;
 var password = req.body.password;
console.log(require.body.firstName);
 connection.connect((err) => {
	if (err) throw err;
	else console.log('db connected');
	 var sql = "INSERT INTO registers (firstName, secondName, email, password) VALUES ('firstname', 'lastname', 'email', 'password')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

  /*var obj = {
  	         firstname: req.body.fistName, 
             lastname: req.body.lastName,
             email: req.body.email,
             password: req.body.password
              }

     JsObj = (JSON.stringify(obj));*/
});


app.post('/signup', (req, res) => {
	res.end('gugyggg');
    
});

app.listen(3000, function () {
  console.log('service listening on port 3000!')
});




