var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var wss = expressWs.getWss('/');

app.use(express.static('public'))

app.use(function (req, res, next) {
  console.log('middleware');
  req.testing = 'testing';
  return next();
});

app.get('/', function(req, res, next){
  console.log('get route', req.testing);
  res.end();
});

app.ws('/', function(ws, req) {
    ws.onmessage = function(msg) {
      console.log(msg.data);
      wss.clients.forEach(function (client) {
        if(client.OPEN) client.send(msg.data);
      });
    };
});

app.listen(3000);
