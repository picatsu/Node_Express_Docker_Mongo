const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const PORT = 3000, request = require('request'), fetch = require('node-fetch');
server.listen(PORT);
console.log('Server is running');
const rp = require('request-promise');
const connections = [];
let questionMap = new Map();
questionMap.set(0, ' Donne ton birthname');
questionMap.set(1, ' Donne ton lastname');
questionMap.set(2, ' Donne ton SSN');
let cpt = 0;
let dataMap = new Map();
let serverResponse = '';
io.sockets.on('connection', (socket) => {
    connections.push(socket);
    console.log(' %s sockets is connected', connections.length);
    io.sockets.emit('new message', { message: questionMap.get(cpt) });
    socket.on('disconnect', () => {
        connections.splice(connections.indexOf(socket), 1);
    });
    socket.on('sending message', (message) => {
        console.log('Message is received :', message);
        io.sockets.emit('new message', { message: ' ==> you said : ' + message });
        cpt++;
        if (cpt != 3) {
            io.sockets.emit('new message', { message: questionMap.get(cpt) });
        }
        console.log('Message send  :', { message: questionMap.get(cpt) }, ' cpt = ', cpt);
        if (cpt == 1) {
            dataMap.set('birthname', message);
        }
        if (cpt == 2) {
            dataMap.set('lastname', message);
        }
        if (cpt == 3) {
            dataMap.set('ssn', message);
            asyncCall();
            cpt = 0;
        }
    });
});
function asyncCall() {
    let postData = {
        lastname: dataMap.get('birthname'),
        birthname: dataMap.get('lastname'),
        ssn: dataMap.get('ssn')
    };
    const clientServerOptions = {
        uri: 'http://localhost:3011/people/',
        body: postData,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        json: true // Automatically stringifies the body to JSON
    };
    request(clientServerOptions, function (error, response, body) {
        if (error != null) {
            console.log('error:', error);
        }
        else {
            serverResponse = body;
            console.log('statusCode:', response && response.statusCode, 'BODY ', serverResponse);
            io.sockets.emit('new message', {
                message: JSON.stringify(serverResponse)
            });
        }
    });
}
app.use(express.static(__dirname + '/dist'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});
