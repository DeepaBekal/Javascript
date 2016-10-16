var http = require('http');

function uponRequest(request, response){
    console.log('A user made request'+ request.url);
    response.writeHead(200, {"Context-type":"text/plain"}); 
    response.write('Welcome to my webpage.');
    response.end();
}

/*creates a server which keeps lsitening at port 8888 and when it has a request at port 8888, callback uponRequest function*/
http.createServer(uponRequest).listen(8888); 
console.log("Server is running.....");