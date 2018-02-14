class Jugador {

    constructor (nombre, salud, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.fuerza = fuerza;
    }

    mostrarNombre() {
        console.log("Mi nombre es " + this.nombre);
    }

    luchar(rival) {
        console.log(this.nombre + "(" + this.salud + ")" + " vs " + rival.nombre + "(" + rival.salud + ")");
        if (Math.random() * this.fuerza > rival.fuerza) {
            rival.salud -= this.fuerza;
            if (rival.salud <= 0) {
                console.log(rival.nombre + " ha muerto.")
            }
        } else {
            this.salud -= rival.fuerza;
            if (this.salud <= 0) {
                console.log(this.nombre + " ha muerto.")
            }
        }
    }
}