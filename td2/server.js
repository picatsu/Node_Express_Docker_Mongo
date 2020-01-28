const http = require('http');
const app = require('./routes/routes');

const port = process.env.PORT || 3011;

const server = http.createServer(app);

server.listen(port);
