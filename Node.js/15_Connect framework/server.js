var http = require('http');
var connect = require('connect');

var app = connect();

function showFirst(request, response, next) {		//a new argument connect without which it doesnt execute the next function
    console.log("Do this first");
    next();
}

function showSecond(request, response, next) {
    console.log("Do this second");
    next();
}

app.use(showFirst);
app.use(showSecond);

http.createServer(app).listen(8888);
console.log('Server is running.....');