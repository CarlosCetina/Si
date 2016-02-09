var express = require('express');
var app = express();
var http = require('http').Server(app);
var fs = require('fs');

var server = http.listen(8080, function(){
	console.log('Running.....');
});

app.get('/', function(req, res){
	res.sendFile(__dirname.replace('server', 'web/') + 'index.html');
})

app.get('/index', function(req, res){
	res.sendFile(__dirname.replace('server', 'web/') + 'index.html');
})

app.use('/web', express.static(__dirname.replace('server', 'web')));