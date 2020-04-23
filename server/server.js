const express = require('express');

const path = require('path');
// el http es un modulo de node pr defecto
const http = require('http');

const soketIO = require('socket.io');

const app = express();

const server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 4000;

app.use(express.static(publicPath));

// esta es  la comunicacion del backend
module.exports.io = soketIO(server)

//
require('./sockets/socket')

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});