class Extraterrestre extends Jugador {

    constructor(nombre, salud, fuerza) {
        super(nombre, salud, fuerza);

    }

    mostrarNombre() {
        console.log("Mi nombre es " + this._invertirNombre(this.nombre));
    }

    _invertirNombre(string) {
        var newString = "";
        for (var i = string.length - 1; i >= 0; i--) {
            newString += string[i];
        }
        return newString;
    }
}