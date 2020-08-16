import * as dbg from 'debug';
import * as http from 'http';
import app from './app';

const debug = dbg('Backend:server');

debug('Starting server');

const server = http.createServer(app);
const serverPort = normalizePort(process.env.PORT || '3000');

app.set('port', serverPort);

debug(`Starting server on port ${serverPort}`);

server.on('error', onError);
server.on('listing',onListening);
server.listen(serverPort);

function normalizePort(val: string){
    const port = parseInt(val, 10);

    if(isNaN(port)) return val;

    if (port >= 0) return port;

    return false;
}

function onError(error) {
    debug(error);
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug(`Listening on ${bind}`);
}