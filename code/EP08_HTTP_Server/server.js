/**
 * Import/Load http module
 */
const http = require('http');


/**
 * Create http server
 */
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write("<h1>Hello Node.js</h1><br/>");
    response.end();
});
server.listen(5000);
console.log("Server is listening on port 5000...");


// const server = http.createServer(function (request, response) {
//      response.writeHead(200, {'Content-Type':'text/html'});
//      response.write("<h1>Hello, Node.js</h1><br/>");
//      response.write("<i>Hello</i>, World!");
//      response.end();
// });
// server.listen(5000);
// console.log("Server is listening on port 5000...");




// const server = http.createServer(server_function);
// server.listen(5000);
// console.log("Server is listening on port 5000...");

// function server_function(request, response)
// {
//     response.writeHead(200, {'Content-Type':'text/html'});
//     response.write("<h1>Hello, Node.js</h1><br/>");
//     response.write("<i>Hello</i>, World!");
//     response.end();
// }
