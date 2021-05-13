/** Import/Load http module */
const http = require('http');

/** Import/Load url module */
const url = require('url');

/** Create http server */
const server = http.createServer((request, response) => {

    response.writeHead(200, {'Content-Type':'text/html'});

    let baseUrl = `http://${request.headers.host}/`;
    let reqUrl  = new url.URL(request.url, baseUrl);

    let sx = reqUrl.searchParams.get('x');
    let sy = reqUrl.searchParams.get('y');
    let sz = reqUrl.searchParams.get('z');

    if(sx == null || sy == null || sz == null) {
        response.write(`error: Parameters are not supported`);
        response.end();
        return;
    }

    let x = parseFloat(sx);
    let y = parseFloat(sy);
    let z = parseFloat(sz);

    if( isNaN(x) || isNaN(y) || isNaN(z) )
    {
        response.write(`error: Parameters are not numbers`);
        response.end();
        return;
    }

    let res = 0;
    if(request.url.indexOf('/add') == 0) {
        res = x + y + z;
        response.write(`x + y + z = ${res}`);
    }
    else if(request.url.indexOf('/sub') == 0) {
        res = x - y - z;
        response.write(`x - y - z = ${res}`);
    }
    else {
        response.write(`error: Command is not supported`);
    }

    response.end();
});

/** Start Server */
server.listen(3000);
console.log("Server is listening on port 3000...");

// http://127.0.0.1:3000/
// http://127.0.0.1:3000/time
// http://127.0.0.1:3000/number
// http://127.0.0.1:3000/add?x=12.3&y=5.2&z=2.1




















// /** Import/Load http module */
// const http = require('http');


// /** Create http server */
// const server = http.createServer((request, response) => {

//     response.writeHead(200, {'Content-Type':'text/html'});

//     if(request.url != '/favicon.ico')
//     {
//         // /add?x=12.3&y=5.2&z=2.1

//         let ss1 = request.url.split('?');

//         // ss1[0] = '/add'
//         // ss1[1] = 'x=12.3&y=5.2&z=2.1'

//         // ss2[0] = 'x=12.3'
//         // ss2[1] = 'y=5.2'
//         // ss2[2] = 'z=2.1'

//         let sx = ss2[0].split('=');
//         let sy = ss2[1].split('=');
//         let sz = ss2[2].split('=');

//         let x = parseFloat(sx[1]);
//         let y = parseFloat(sy[1]);
//         let z = parseFloat(sz[1]);

//         let res = 0;
//         if(ss1[0] == '/add') {
//             res = x + y + z;
//             response.write('x + y + z = ' + res.toFixed(3));
//         }
//         else if(ss1[0] == '/sub') {
//             res = x - y - z;
//             response.write('x - y - z = ' + res.toFixed(3));
//         }

//         console.log(res);

//     }

//     //console.log(request.url)



//     response.end();

// });

// /** Start Server */
// server.listen(3000);
// console.log("Server is listening on port 3000...");

// // http://127.0.0.1:3000/
// // http://127.0.0.1:3000/time
// // http://127.0.0.1:3000/number
// // http://127.0.0.1:3000/add?x=12.3&y=5.2&z=2.1
