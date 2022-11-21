const jugador = require('./jugador');

module.exports = class partida{
    constructor(
        idPartida,
        jugador1,
        jugador2,
    ){
        this.idPartida = idPartida;
        this.jugador1 =jugador1;
        this.jugador2 =jugador2;
    }
}