var express = require('express');
var app = express();

app.get('/test', function (req, res) {
  res.send({ 
      data: 'Hello World!'
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;