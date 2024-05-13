var http = require('http');
var fileSys = require('fs');
var url = require('url');

var server = http.createServer((req, res)=>{
    let q = url.parse(req.url, true);
    let path = q.query;
    let filelocation;
    switch (path.menu){
        case '/':
            filelocation = 'pages/index.html';
            break;
        case 'home':
            filelocation = 'pages/index.html';
            break;
        case 'player':
            filelocation = 'pages/player.html';
            break;
        case 'daftar':
            filelocation = 'pages/daftar.html';
            break;    
        default:
            filelocation = 'pages/index.html';
        
    }
    fileSys.readFile(filelocation, (err, data)=>{
        if (err){
            res.writeHead(404, {'Content-type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

server.listen(8000);