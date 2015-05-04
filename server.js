var express     = require('express');

var app         = express();
var http        = require('http').Server(app);
var path        = require('fs');

var portNumber = 3005;


app.get('/', function(req, res){
      res.sendFile(__dirname + '/' + 'World Wide Javascript.html');
      console.log('User loading page. Loading %s', __dirname + '/index.html');
});

app.get('/*' , function( req, res, next) {
    var file = req.params[0];

		path.exists(__dirname + '/' + file, function(exists) {
			if (exists) {
				res.sendFile( __dirname + '/' + file );
			}
		});
});

http.listen(portNumber, function(){
  console.log('Server listening at %s:%s', __dirname, portNumber);
});