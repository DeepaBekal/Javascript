var http = require('http');
var connect = require('connect');

var app = connect();

function homePage(request, response, next) {
    console.log("Displaying home page.");
    response.writeHead(202,{"Context-type":"text/plain"});
    response.write('This is home page');
    response.end();
    next();
}

function aboutPage(request, response, next) {
    console.log("Displaying about page");
    response.writeHead(202,{"Context-type":"text/plain"});
    response.write('This is about page.');
    response.end();
    next();
}

app.use('/home', homePage);
app.use('/about', aboutPage);

http.createServer(app).listen(8888);
console.log('Server is running.....');