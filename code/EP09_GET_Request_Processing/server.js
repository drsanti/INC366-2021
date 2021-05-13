/**
 * Import/Load http module
 */
const http = require('http');


/**
 * Create http server
 */
const server = http.createServer((request, response) => {

    response.writeHead(200, {'Content-Type':'text/html'});

    //-- / (home page)
    //-- /time
    //-- /number
    if(request.url == '/')
    {
        response.write('<h1>home page</h1>');
    }
    else if(request.url == '/time')
    {
        let dt = new Date();
        let hh = dt.getHours();
        let mm = dt.getMinutes();
        let ss = dt.getSeconds();
        response.write(hh + ':' + mm + ':' + ss);
    }
    else if(request.url == '/number') {
        let x = Math.random();
        response.write((x * 100.0).toFixed(3) );
    }
    else if(request.url == '/favicon.ico') {

    }
    else {
        response.write('not supported!');
    }

    response.end();

});

server.listen(3000);

console.log("Server is listening on port 3000...");
