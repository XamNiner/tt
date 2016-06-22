var express = require('express'),
    gzippo = require('gzippo'),
    morgan = require('morgan'),
    socketio = require('socket.io'),
    uuid = require('node-uuid'),
    http = require('http');

var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

//initialize the server
var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log("App is running on the port: ", port);
})

//circumvent heroku path problems
app.use(function(req, res) {
    res.sendFile(__dirname + "/dest/index.html");
});