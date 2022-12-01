/*const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('resources'))

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.redirect(301, '/login');
})

// Página de Login
app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, '/login.html'));
});


// Página de Registro
app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, '/register.html'));
  });
  
// Página del Juego
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '/home.html'));
  });

  // Página de la partida
app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, '/game.html'));
});
  

app.listen(port);
console.log('Server started at http://localhost:' + port);*/

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('vistas'))

app.get('/', (req, res) => {
  res.redirect(301, '/vistas/login');
})

io.on('connection',function(socket) {
  console.log('Connection established')
});

server.listen(8080, function(){
  console.log('Server listening on http://localhost:8080');
});
