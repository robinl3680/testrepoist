console.log("begin");
var http=require("http");
var express=require("express");
http.createServer(function(request,response) {
	response.writeHead(200,{'content type':'text-/plain'});
	response.end('<html> <head><title>nothing</title> <style type="text/css"> .ss{color:red;font-size:22pt}</style></head><body class="ss"><span style="color:green;font-size:32pt">hello</span></body></html>');
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
