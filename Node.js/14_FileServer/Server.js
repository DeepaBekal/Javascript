var http = require('http');
var file = require('fs');

function sendErrorResponse(response){
    response.writeHead(404,{"Context-type":"text/plain"}); // error 404 when accessed unavailable file
    response.write('Error 404: Webpage not found'); //error message
    response.end();
}


function uponRequest(request, response) {
    if(request.method == 'GET' && request.url == '/'){       //method defined in form(html) as get, post and requested url
        console.log("A user made request"+ request.url);
        response.writeHead(200,{"Context-type":"text/html"});  //response is a html file
        /*basic response is sent as a chunk of text, but in case of a html we wont know how big it is, 
        so better to send response as a stream, so make sure there are no error. createReadStream = readeable stream, read the file.
        pipe= write it out. So the read in html is being sent out through response object.*/
        file.createReadStream('./index.html').pipe(response);  
    }
    else{
        sendErrorResponse(response);  //error 404 when accessed unavailable file
    }
}

/*creates a server which keeps lsitening at port 8888 and when it has a request at port 8888, callback uponRequest function*/
http.createServer(uponRequest).listen(8888);
console.log('Server is running.....');