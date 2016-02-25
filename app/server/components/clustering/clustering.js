const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {

	console.log("I am master");
	var numReqs = 0;
	console.log('numReqs =', numReqs);

	// Count requests
	function messageHandler(msg) {
		if (msg.cmd && msg.cmd == 'notifyRequest') {
			console.log(msg.cmd);
			numReqs += 1;
		}
	}

	// Start workers and listen for messages containing notifyRequest
	const numCPUs = require('os').cpus().length;

	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	Object.keys(cluster.workers).forEach((id) => {
		cluster.workers[id].on('message', messageHandler);
	});

} else {
	console.log("I am worker");
	// Worker processes have a http server.
	var server = http.Server((req, res) => {
		res.writeHead(200);
		res.end('hello world\n');
		// notify master about the request
		// that's why we are using process here since we have a master process and a child process
		process.send({ 'cmd': 'notifyRequest'});

	}).listen(8000);
	server.on('connection',function(socket){
		//handle a socket connection (TCP)
		console.log(socket);
	});
}
