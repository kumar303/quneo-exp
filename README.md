These are experiments in hooking up a [QuNeo](http://www.keithmcmillen.com/QuNeo/tour)
to the web. Currently I'm working with [appmaker](http://appmaker.mozillalabs.com/)
folks at [mozfest](http://mozillafestival.org/) to hack together some playable components.


# Instructions (maybe?)

Install the Quneo OSC Bridge abd toggle on OSC Out on port 9999.
Start an OSC server to transmit Quneo data to the web.

    cd server
    npm install
    npm start

Start a test web page.

    cd client
    npm install
    npm start

Open it in a browser. Activate Quneo default preset 1. Tap on the Quneo pads.
