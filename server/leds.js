// http://soledadpenades.com/tag/quneo/
var osc = require('node-osc');

var client = new osc.Client('0.0.0.0', 8888);

function allOff() {
  client.send('/quneo/leds/pads/*/*/red', 0);
  client.send('/quneo/leds/hSliders/*/*', 0);
  client.send('/quneo/leds/hSliders/*/*', 0);
  client.send('/quneo/leds/vSliders/*/*', 0);
}

// All pads
client.send('/quneo/leds/pads/*/*/red', 1);

// Turn all hsliders on
client.send('/quneo/leds/hSliders/*/*', 1);

// set all vslider locations on.
// vslider location is 0-7.
client.send('/quneo/leds/vSliders/*/*', 1);

//

//allOff();
