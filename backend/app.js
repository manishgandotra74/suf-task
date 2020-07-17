var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });
  
  /// routes files 
  const user = require('./router/user');
  app.use('/user', user);

  mongoose.connect('mongodb+srv://Manish:u5NldlSW5vLy3qjy@letstalk-nviuu.mongodb.net/usertask?ssl=true&authSource=admin&retryWrites=true&w=majority',
 {useNewUrlParser: true})

  // app.use(function(req, res, next) {
  //   var err = new Error('Not Found');
  //   err.status = 404;
  //   next(err);
  // });
  app.listen(4000)

module.exports = app;