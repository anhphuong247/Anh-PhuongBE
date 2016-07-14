'use strict';

// // Setup server
// var express = require('express');
// var path = require('path');
//
// var app = express();
// app.use(express.static(__dirname + '/client'))
// app.route('/*')
//     .get((req, res) => {
//       res.sendFile(path.join(__dirname, '/client/index.html'));
//     });
//
// app.listen(1337, function () {
//   console.log('Example app listening on port 1337!');
// });


// Khoi tao
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Cau hinh
app.use(bodyParser());
app.use(express.static(__dirname + '/client'));

var girls = [
  {
    id : 0,
    name: "Dzung",
    age: 21,
    facebook: "Dzung",
    password: "bananhtung"
  }, {
    id : 1,
    name: "Ha",
    age: 22,
    facebook: "Ha San",
    password: "bananhtung1"
  },
 {
    id : 1,
    name: "Ha",
    age: 22,
    facebook: "Ha San",
    password: "bananhtung1"},
 {
    id : 1,
    name: "Ha",
    age: 22,
    facebook: "Ha San",
    password: "bananhtung1"}];

app.route('/api/hot-girl')
   .get(function(request, response){
     response.json(girls);
   })
   .post(function(request, response){
     if (request.body.id > -1){
       for(var i = 0 ; i<girls.length;i++)
       {
         if(girls[i].id == request.body.id)
         {
           girls.splice(i,1);
         }
       }
     }
     if (request.body.girl) {
       if(request.body.index > -1){
         girls[request.body.index] = request.body.girl;
       }
       else{
         girls.push(request.body.girl);
         girls[girls.length - 1].id = girls.length - 1;
       }
     }

     response.end("success");
   })
app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.join(__dirname, '/client/index.html'));
    });

//Start Server
app.listen(3000, function(){
  console.log("Server started at port 3000!");
});
