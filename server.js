/*const path = require('path');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const randomColor = require('randomcolor');
const createBoard = require('./create-board')



app.use(express.static('${__dirname}/../login'))

app.get('/', (req, res) => {
  res.redirect(301, '.../login');
})

io.on('connection', (sock) => {
  const color = randomColor();
  const cooldown = createCooldown(2000);
  sock.emit('board', getBoard());

  
  sock.on('turn', ({ x, y }) => {
    if (cooldown()) {
      const playerWon = makeTurn(x, y, color);
      io.emit('turn', { x, y, color });

      if (playerWon) {
        sock.emit('message', 'You Won!');
        io.emit('message', 'New Round');
        clear();
        io.emit('board');
      }
    }
  });
});

const io = socketio(server);
const { clear, getBoard, makeTurn} = createBoard(20);




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
});*/

const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const randomColor = require('randomcolor');
const createBoard = require('./create-board');
const createCooldown = require('./create-cooldown');

const app = express();

app.use(express.static(`${__dirname}/../login`));

const server = http.createServer(app);
const io = socketio(server);
const { clear, getBoard, makeTurn } = createBoard(20);

io.on('connection', (sock) => {
  const color = randomColor();
  const cooldown = createCooldown(2000);
  sock.emit('board', getBoard());

  sock.on('message', (text) => io.emit('message', text));
  sock.on('turn', ({ x, y }) => {
    if (cooldown()) {
      const playerWon = makeTurn(x, y, color);
      io.emit('turn', { x, y, color });

      if (playerWon) {
        sock.emit('message', 'Has Ganado!');
        io.emit('message', 'Nueva Ronda');
        clear();
        io.emit('board');
      }
    }
  });
});

server.on('error', (err) => {
  console.error(err);
});

server.listen(8080, () => {
  console.log('Server listening on http://localhost:8080');
});