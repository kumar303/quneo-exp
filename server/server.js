var events = require('events');
var osc = require('node-osc');
var sio = require('socket.io');
var http = require('http');

var oscServer = new osc.Server(9999, '0.0.0.0');
var inEvent = false;
var idleTime = 200;  // time in ms to consider an event done
var eventEnd;

var quneo = new events.EventEmitter();

// Using PRESET 1 on Quneo.

oscServer.on("message", function (msg, rinfo) {

  if (inEvent) {
    clearTimeout(eventEnd);
  } else {
    // start of an event stream
    console.log('--------------------------');
    inEvent = true;
  }
  eventEnd = setTimeout(function() {
    inEvent = false;
  }, idleTime);

  var path = msg[0];
  var value = msg[1];

  var drum = path.match(/^\/quneo\/pads\/([0-9]+)\/drum\/note_velocity/);
  var vslider = path.match(/^\/quneo\/vSliders\/([0-9]+)\/location/);
  if (drum) {
    quneo.emit('play', {type: 'drum', data: {id: drum[1], velocity: value}});
  } else if (vslider) {
    quneo.emit('play', {type: 'vslider', data: {id: vslider[1], location: value}});
  } else {
    // Unhandled events.
    //console.log('        ' + msg);
  }
});


// Socket IO server to send event data.
var app = http.createServer(function(req, res) {
  console.log('web request? no');
});
var ioServ = sio.listen(app)

var host = process.env['HOST'] || '0.0.0.0';
var port = process.env['PORT'] || 5000;

ioServ.sockets.on('connection', function (socket) {
  socket.emit('server', 'connected');
  quneo.on('play', function(data) {
    console.log('play', data);
    socket.emit('play', data);
  });
});

console.log('Socket server at ' + host + ':' + port);
app.listen(port, host);
