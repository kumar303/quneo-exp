var express = require('express');
var app = express();
var media = __dirname + '/www';

app.configure(function() {
  app.use(express.logger({format: 'dev'}));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
});

app.get('/', function (req, res) {
  res.sendfile(media + '/index.html');
});

app.configure(function() {
  app.use('/', express.static(media));
});

var port = process.env['PORT'] || 3000;
app.listen(port);
console.log('Listening on port ' + port);
