const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const {Server} = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (Socket)=>{
    console.log('socket connected', Socket.id);
});

Socket.listen(5000);
