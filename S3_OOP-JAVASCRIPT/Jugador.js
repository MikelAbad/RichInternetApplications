class Jugador {

    constructor(nombre, salud, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.fuerza = fuerza;
    }

    mostrarNombre() {
        console.log("Mi nombre es " + this.nombre);
    }

    luchar(rival) {
        if (Math.random() * this.fuerza > rival.fuerza) {
            rival.salud -= this.fuerza;
        } else {
            this.salud -= rival.fuerza;
        }
    }
}