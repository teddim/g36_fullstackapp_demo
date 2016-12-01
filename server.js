var express = require('express');
var app = express();

var index = require('./routes/index');

app.use('/', index);

app.listen('3000', function(){
  console.log("listening on port 3000");
});
