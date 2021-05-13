/** EP11 Simple WebServer */

const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

    console.log(request.url);

    if(request.url == '/') {
        /** index.html */
        fs.readFile('./web/index.html', (error, content) => {
            if(!error) {
                response.writeHead(200, {'Content-Type':'text/html'});
                response.end(content, 'utf-8');
            }
            else {
                response.end('Error: Cannot read file ./web/index.html');
            }
        });
    }
    else if(request.url == '/style.css') {
        /** style.css */
        fs.readFile('./web/style.css', (error, content) => {
            if(!error) {
                response.writeHead(200, {'Content-Type':'text/css'});
                response.end(content, 'utf-8');
            }
            else {
                console.log('Error: Cannot read file ./web/style.css');
            }
        });
    }
    else if(request.url == '/bootstrap.min.css') {
        /** bootstrap.min.css */
        fs.readFile('./web/bootstrap.min.css', (error, content) => {
            if(!error) {
                response.writeHead(200, {'Content-Type':'text/css'});
                response.end(content, 'utf-8');
            }
            else {
                console.log('Error: Cannot read file ./web/bootstrap.min.css');
            }
        });
    }
    else if(request.url == '/script.js') {
        /** script.js */
        fs.readFile('./web/script.js', (error, content) => {
            if(!error) {
                response.writeHead(200, {'Content-Type':'text/javascript'});
                response.end(content, 'utf-8');
            }
            else {
                console.log('Error: Cannot read file ./web/script.js');
            }
        });
    }
    else if(request.url == '/favicon.ico') {
        /** favicon.ico */
        fs.readFile('./web/favicon.ico', (error, content) => {
            if(!error) {
                response.writeHead(200, {'Content-Type':'image/x-icon'});
                response.end(content, 'utf-8');
            }
            else {
                console.log('Error: Cannot read file ./web/favicon.ico');
            }
        });
    }
    else {
        response.end('not found!');
    }
});

server.listen(3000);
console.log("Server is listening on port 3000...");
