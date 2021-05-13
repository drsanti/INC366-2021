/** EP11 Simple WebServer */

const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

    console.log(request.url);

    if(request.url == '/') {
        /** index.html */
        fs.readFile('./index.html', (error, content) => {
            if(!error) {
                response.writeHead(200, {'Content-Type':'text/html'});
                response.end(content, 'utf-8');
            }
            else {
                response.end('Error: Cannot read file ./index.html');
            }
        });
    }
    else if(request.url == '/style.css') {
        /** style.css */
        fs.readFile('./style.css', (error, content) => {
            if(!error) {
                response.writeHead(200, {'Content-Type':'text/css'});
                response.end(content, 'utf-8');
            }
            else {
                console.log('Error: Cannot read file ./style.css');
            }
        });
    }
    else if(request.url == '/script.js') {
        /** script.js */
        fs.readFile('./script.js', (error, content) => {
            if(!error) {
                response.writeHead(200, {'Content-Type':'text/javascript'});
                response.end(content, 'utf-8');
            }
            else {
                console.log('Error: Cannot read file ./script.js');
            }
        });
    }
    else if(request.url == '/favicon.ico') {
        /** favicon.ico */
        fs.readFile('./favicon.ico', (error, content) => {
            if(!error) {
                response.writeHead(200, {'Content-Type':'image/x-icon'});
                response.end(content, 'utf-8');
            }
            else {
                console.log('Error: Cannot read file ./favicon.ico');
            }
        });
    }
    else {
        response.end('not found!');
    }
});

server.listen(3000);
console.log("Server is listening on port 3000...");
