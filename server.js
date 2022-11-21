const http= require('http');
const express = require('express');
//const path = require('path');
const socketio = require('socketio');


const app = express();
app.use(express.static('resources'))



//const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.redirect(301, '/login');
})

const server = http.createServer(app);
const io = socketio(server);

io.on('connection',(sock) => {
  console.log('somenoe is connected')

});




server.on('error', (err) => {
  console.error(err);
})

server.listen(8080,()=> {
  console.log('server is ready')
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
  

app.listen(port);
console.log('Server started at http://localhost:' + port);
