
var express = require('express');
var app = express();

var server = require('http').createServer(app);

app.get('/',function(req, res) {
    res.sendFile(_dirname + '/client/index.html');
});
app.use('/client', express.static(_dirname + '/client'));

console.log("Server started.");

//socket.io and basic chat functionality

SOCKET_LIST = {};

var io = require('socket.io')(server);
io.sockets.on('connection', function(socket) {
    
    console.log('new user!');
    var socketId = Math.random();
    SOCKET_LIST[socketId] = socket;
    
    socket.on('sendMsgToServer',function(data) {
        console.log('someone sent a message!');
        for(var i in SOCKET_LIST) {
            SOCKET_LIST[i].emit('addToChat', data);
        }
    });
    
    socket.on('disconnect',function() {
        delete SOCKET_LIST[socket.id];
    });
});

server.listen(4141);

//designate several actions if a socket retrieves a certain event, some are reserved by socket.io such as 'connection'
//others are defined ourselves such as 'sendMsgServer'
//step by step what's happening
//socket connects - define functions based on events or strings the socket receives
//gen random id, when user connects and add to socket list var
//define function, when even 'sendMsgToServer' occurs, loops through socket list and sends the message to every connected socket with our 'addToChat' event
//when socket disconnects, remove them from our socket list
//lastly, tell our app to listen on port 4141, whatever port you choose, make sure it is open and not blocked by a firewall
//provides basic foundation for our node.js chat server, users can connect, send messages, that will be sent to every connected user, we track when someone disconnects
//congrats! you've completed the first major step in learning how to create a real-time chat app!
//save and exit your app.js, start app by running this command in the project directory
//C:\Users\Hanna\chat>node app.js

//users can access your app, by naving to localhost:4141
//now to create the html page for user