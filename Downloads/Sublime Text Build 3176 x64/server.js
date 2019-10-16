const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
var mysql = require('mysql');

//const conn = require('./db.js');

const port = 3000;
const mysqlPort = 3306;
var bodyParser = require('body-parser');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//papa@giova.it  email di prova
//999999999      pass di prova
console.log('backend connected at port: ' + port);

  app.use('/signup',(req, res) => {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");	 

             firstname = req.body.firstName, 
             lastname = req.body.lastName,
             email = req.body.email,
             password = req.body.password
             console.log('Dati inseriti: ' + firstname + ' ' + lastname + ' ' + email + ' '+ password);
             res.end();
 var sql = "INSERT INTO registers (`firstName`, `secondName`,`email`,`password`) VALUES ('" + firstname + "','" + lastname + "', '" + email + "', '" + password + "')";


 var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root85',
  database : 'database1'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  });

 

connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("records inserted");
   });
    
connection.end();
 });
 app.use('/login', (req,res) => {
  	  res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      email =  req.body.email;                          
      password = req.body.password;                
      console.log(email);
      console.log(password);
      res.end();

      var sql = "SELECT firstName, secondName FROM registers WHERE email = '" + email + "' AND  password = '" + password + "' ";


  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root85',
  database : 'database1'
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  });

 

connection.query(sql, (err, row ,result) => {
    if (err) { 
      throw err;
   } else if (row.lenght == 0 || !row.lenght) {
       console.log("empty row");
       res.send(/*{redirect: "http://localhost:4200/login"}*/);
      // next();
   } else 
    if (result) {
    console.log("table selected");
    console.log(result);
}

   });
    
connection.end();
 });
 
	app.listen(3000, function () {
  console.log('service listening on port 3000!');
});




