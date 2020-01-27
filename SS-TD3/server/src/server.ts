import { watchFile } from "fs";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'),
fetch   = require('node-fetch');


const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const PORT = 3000,
    request = require('request');

server.listen(PORT);
console.log('Server is running');
const rp = require('request-promise');
const shouldAdd = true;

const connections = [];
let questionMap = new Map();
questionMap.set(0, ' Donne ton birthname');
questionMap.set(1, ' Save : "s" or "n" ');
questionMap.set(2, ' Donne ton lastname');
questionMap.set(3, ' Save : "s" or "n" ');
questionMap.set(4, ' Donne ton SSN');
questionMap.set(5, ' Save : "s" or "n" ');

let cpt = 0;

let dataMap = new Map();
let serverResponse = '';

let AllData = '';
getAllData();
io.sockets.on('connection', (socket) => {
    connections.push(socket);
    console.log(' %s sockets is connected', connections.length);
    io.sockets.emit('new message', { message: questionMap.get(cpt) });


    socket.on('shouldAdd', (message ) => {
       console.log('shouldADD ? ', message );
    });

    socket.on('disconnect', () => {
        connections.splice(connections.indexOf(socket), 1);
    });
    socket.on('getAll', (message) => {
        getAllData();
       
        io.sockets.emit('getAll', { message:  AllData }   );
        
        console.log(' jai envoye toutes les donnees ', { message:  AllData });

    });

    socket.on('sending message', (message) => {
        console.log('Message is received :', message);
        io.sockets.emit('new message', { message: ' ==> you said : ' + message });
        cpt++;
        if (cpt != 6) {
            io.sockets.emit('new message', { message: questionMap.get(cpt) });

        }
        console.log('Message send  :', { message: questionMap.get(cpt) }, ' cpt = ', cpt);

        if (cpt == 1) {
            dataMap.set('birthname', message);
        }

        if (cpt == 2) {
            dataMap.set('save', message);
            if (dataMap.get('save') != "s"){
                cpt = 0;
            }
        }

        if (cpt == 3) {
          dataMap.set('lastname', message);
        }

        if (cpt == 4) {
            dataMap.set('save', message);
            if (dataMap.get('save') != "s"){
                cpt = 2;
            }
          }

        if (cpt == 5) {
            dataMap.set('ssn', message);
            
            ///io.sockets.emit('new message', { message: questionMap.get(cpt) });
        }

        if (cpt == 6) {
            dataMap.set('save', message);
            if (dataMap.get('save') != "s"){
                cpt = 4;
            }
            else{
                asyncCall();
                cpt = 0;
                getAllData();  
            }
            ///io.sockets.emit('new message', { message: questionMap.get(cpt) });
        }
    });
});


function asyncCall() {
    let postData = {
        lastname: dataMap.get('birthname'),
        birthname: dataMap.get('lastname'),
        ssn: dataMap.get('ssn'),
        shouldAdd : shouldAdd,
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

            console.log('statusCode:',
                response && response.statusCode, 'BODY ', body);

            io.sockets.emit('new message', {
                message:
                    JSON.stringify(body)
            });


        }

    });



}

function getAllData() {
    let va = "";
    fetch('http://localhost:3011/people/')
    .then(res => res.json())
    .then(data => {
        AllData = JSON.stringify(data);
        va = JSON.stringify(data);
    });
    return va;
}
app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});
