require('dotenv').config();
const Server = require('./models/server');
const server = new Server();
const socket = require('./models/socket');


const servidor = server.hey_listen();
socket(servidor);