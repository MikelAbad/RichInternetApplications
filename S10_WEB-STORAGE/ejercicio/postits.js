window.onload = init;

var postits = [];

function init() {
    var addButton = document.getElementById("add_button");
    addButton.onclick = createSticky;
    var clearButton = document.getElementById("clear_button");
    clearButton.onclick = clearStickyNotes;

    // EJERCICIO A
    // cargar las notas postit de localStorage
    // cada nota se guarda como un par así: postit_X = texto_de_la_nota
    // donde X es el número de la nota
    // por cada una de ellas, llamar al método
    // addStickyToDOM(texto_de_la_nota);

    var currentKey, currentValue;
    for (var i = 0; i < localStorage.length; i++) {
        currentKey = localStorage.key(i);
        currentValue = localStorage.getItem(currentKey);
        if (currentKey.startsWith("postit_")) {
            addStickyToDOM(currentValue);
            postits.push(currentValue);
        }
    }
}

function createSticky() {
    var value = document.getElementById("note_text").value;

    // EJERCICIO B
    // crear la nota con nombre postit_X, donde X es un número entero
    // (postit_1, postit_2, ...)  y guardarla en el localStorage

    postits.push(value);
    localStorage.setItem("postit_" + (postits.length), value);
    addStickyToDOM(value);
}

function addStickyToDOM(value) {
    var stickies = document.getElementById("stickies");
    var postit = document.createElement("li");
    var span = document.createElement("span");
    span.setAttribute("class", "postit");
    span.innerHTML = value;
    postit.appendChild(span);
    stickies.appendChild(postit);
}

function clearStickyNotes() {
    // EJERCICIO C
    // Crear un nuevo botón en la ventana de postit notes que al pulsarlo,
    // elimine las notas de pantalla y de localStorage
    // Algoritmo:
    // obtener una referencia a la capa "stickies"
    // recorrer los hijos (childNodes) de esa referencia,
    // eliminándolos uno a uno (removeChild)

    var stickies = document.getElementById("stickies");

    while (stickies.firstChild) {
        stickies.removeChild(stickies.firstChild);
    }

    var i = 0;
    postits.forEach(function (postit) {
        i++;
        localStorage.removeItem("postit_" + i);
        // Pueden quedar entradas sin borrar si se modifica manualmente el localStorage
        // La versión más segura sería recorrer el localStorage entero en vez de los stickies
    });

    postits = [];
}
