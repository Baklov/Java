/**
 * http://usejsdoc.org/
 */

var http = require("http")

var server = http.createServer(
function (request, response) {
	response.writeHead(200,{"Content-Type":"text/html"});
	response.end('Hello Ivo');
	console.log("Hello word");		
}).listen(8888);