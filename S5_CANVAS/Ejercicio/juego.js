var piezas = [];
var filasIniciales = 3;
var alturaTablero = 8;
var kNegras = "#000000";
var kBlancas = "#cccccc";
var lienzo;
var contexto;

function Casilla(fila, columna, color) {
    this.fila = fila;
    this.columna = columna;
    this.color = color;
}

function iniciarJuego(canvas) {
    lienzo = canvas;
    contexto = lienzo.getContext("2d");

    // Cargar piezas negras en array de piezas
    for (var i = 0; i < filasIniciales; i++) {
        for (var j = (i + 1) % 2; j < alturaTablero; j = j + 2) {
            piezas.push(new Casilla(i, j, kNegras));
        }
    }

    // Cargar piezas blancas
    for (var i = alturaTablero - 1; i >= alturaTablero - filasIniciales; i--) {
        for (var j = (i + 1) % 2; j < alturaTablero; j = j + 2) {
            piezas.push(new Casilla(i, j, kBlancas));
        }
    }

    pintarTablero();
}

function pintarTablero() {

    // Borrar tablero
    contexto.clearRect(0, 0, lienzo.width, lienzo.height);

    // Pintar tablero
    for (var x = 0; x <= lienzo.width; x += 50) {
        contexto.moveTo(x, 0);
        contexto.lineTo(x, lienzo.height);
    }

    for (var y = 0; y <= lienzo.height; y += 50) {
        contexto.moveTo(0, y);
        contexto.lineTo(lienzo.width, y);
    }

    contexto.strokeStyle = "#bfbfbf";
    contexto.stroke();

    // pintarPiezas
    for (var i = 0; i < piezas.length; i++) {
        pintarPieza(piezas[i], piezas[i].color);
    }
}

function pintarPieza(p, color) {
    contexto.beginPath();
    contexto.strokeStyle="#000000";
    contexto.arc((p.columna * 50) + 25, (p.fila * 50) + 25, 19, 0, 2 * Math.PI, true);
    contexto.stroke();
    contexto.fillStyle = color;
    contexto.fill();
}