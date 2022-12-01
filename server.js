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
const path = require('path');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const randomColor = require('randomcolor');



app.use(express.static('.../resources'))

app.get('/', (req, res) => {
  res.redirect(301, '.../login');
})

io.on('connection',function(socket) {
  const color = randomColor();
  console.log('Connection established')
  sock.on ('turn', ({x, y}) => io.emit('turn',{x, y, color}));
});



server.listen(8080, function(){
  console.log('Server listening on http://localhost:8080');
});







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
