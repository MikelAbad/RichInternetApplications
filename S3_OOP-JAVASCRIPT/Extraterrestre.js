class Extraterrestre extends Jugador {

    constructor(nombre, salud, fuerza) {
        super(nombre, salud, fuerza);
    }

    mostrarNombre() {
        console.log("Mi nombre es " + this._invertirNombre());
    }

    _invertirNombre() {
        let newString = "";
        for (let i = this.nombre.length - 1; i >= 0; i--) {
            newString += this.nombre[i];
        }
        return newString;
    }
}