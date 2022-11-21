module.exports = class jugador {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    email(){
        return this.email;
    }
    password(){
        return this.password;
    }
}