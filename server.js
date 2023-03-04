const http = require('http');
const app = require('./app');

let hostname = 'localhost';
let port = process.env.PORT || 3000;

const args = process.argv.slice(2);

if (args.length > 0) {
    if (args[0].startsWith('--host')) {
        hostname = args[0].split('=')[1];
    }

    if (args[1].startsWith('--port')) {
        port = args[1].split('=')[1];
    }
}

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at port http://${hostname}:${port}`);
});