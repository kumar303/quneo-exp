(function() {
  console.log('loading...');
  var socket = io.connect('http://0.0.0.0:5000');

  socket.on('server', function (msg) {
    console.log('server: ' + msg);
  });

  socket.on('play', function (evt) {
    if (evt.type === 'drum') {
      console.log(evt.type, evt.data.id, evt.data.velocity);
    } else if (evt.type === 'vslider') {
      console.log(evt.type, evt.data.id, evt.data.location);
    } else if (evt.type === 'longSlider') {
      console.log(evt.type, evt.data.location);
    } else if (evt.type === 'upButton') {
      console.log(evt.type, evt.data.id, evt.data.velocity);
    } else if (evt.type === 'downButton') {
      console.log(evt.type, evt.data.id, evt.data.velocity);
    } else {
      console.log('unknown', evt.type, evt.data);
    }
  });
})();
