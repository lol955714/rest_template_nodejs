const socket = (server) => {
    const io = require('socket.io')(server);
    io.on('connection',  (socket) => {
        console.log(socket.id)
        io.emit('MESSAGE', "mensajes")
        socket.on('SEND_MESSAGE',  () => {
            io.emit('MESSAGE', "mensajes")
        });

    });
}
module.exports = socket;