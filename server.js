let http=require('http');
let express=require('express');
let BodyParser=require('body-parser');
let app=express();
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/";
console.log("aa");
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
});

app.post('/fsignin',(req,res)=>{
	console.log('fsihnin');
	req.body=JSON.Parse(req.body);
	console.log('bef'+req.body);
	//res.send(req.body);
	var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("WT");
  dbo.collection("User").find({'mail':req.body.mail,'password':req.body.password}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
    db.close();
  });
});
});
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/fsignup',(req,res)=>{   
	console.log('fsignup');

	//res.send(req.body);
        var MongoClient = require('mongodb').MongoClient;                                                       //Create a database named "mydb":                      
url = "mongodb://localhost:27017/";                                                                             MongoClient.connect(url, function(err, db) {              if (err) throw err;                                     console.log("Database created!");
  var dbo = db.db("WT");                                  dbo.collection("User").find({'mail':req.body.mail}).toArray(function(err, result)
 {                                                          if (err) throw err;                                     console.log(result);                                    if(result)
    {
	    res.send('Already an user. Please login');
    }
    else
    {
	 db.collection('User').inserOne({'mail':req.body.mail,'password':req.body.password,'cpassword':req.body.cpassword});
	    res.send('Successfully created');
    }
	 
		 db.close();                                           });                                                   });                                                                                                                     console.log(req.body);                          });
app.listen(8080);
