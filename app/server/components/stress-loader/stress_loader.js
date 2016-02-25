var http = require('http');
var net = require('net');
var client;

openHTTP(100);
openSockets(5000);

function openSockets(no_connections){

	for (var i = 0; i < no_connections; i++) {

		client = net.connect({port: 8000}, () => {
			console.log('connected to server!');
		});
		client.on('data', (data) => {
			console.log(data.toString());
			client.end();
		});
		//handle the error so program won't throw
		client.on('error',function(err){
			console.log(err);
		});
		//fire when the socket closes
		client.on('end', () => {
			console.log('disconnected from server');
		});
	}
}


function openHTTP(no_connections){
	//http request test

	var options = {
		port: 8000,
		hostname: '127.0.0.1'
	};

	callback = function(response) {

		var str = '';
		response.on('data', function (chunk) {
			str += chunk;
		});
		response.on('end', function () {
			console.log(str);
		});
	}

	for(var i=0;i<no_connections;i++){
		http.request(options, callback).end();
	}
}
