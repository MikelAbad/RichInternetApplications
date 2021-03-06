window.onload = obtenerLocalizacion;

function obtenerLocalizacion() {
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, mostrarError);
    }
    else {
        alert("Este navegador no soporta Geolocation API");
    }
}

function mostrarLocalizacion(posicion) {
    var latitud = posicion.coords.latitude;
    var longitud = posicion.coords.longitude;

    var div = document.getElementById("localizacion");
    div.innerHTML = "Latitud de tu posición: " + latitud + ", Longitud: " + longitud;

    showMap(posicion.coords);

}

function mostrarError(error) {
    var errorTypes = {
        0: "Error desconocido",
        1: "Permiso denegado",
        2: "Posición no disponible",
        3: "Tiempo de espera agotado"
    };
    var errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    var div = document.getElementById("localizacion");
    div.innerHTML = errorMessage;
}


var map; // variable global

function showMap(coords) {

    var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);

    var mapOptions = {
        zoom: 10,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapDiv = document.getElementById("mapa");
    map = new google.maps.Map(mapDiv, mapOptions);

    var titulo = "Tu geoposición";
    var contenido = "Latitud: " + coords.latitude + ", Longitu:" + coords.longitude;
    addMarker(map, googleLatAndLong, titulo, contenido);

}

function addMarker(mapa, latlong, titulo, contenido) {
    var markerOptions = {
        position: latlong,
        map: mapa,
        title: titulo,
        clickable: true
    };

    var marker = new google.maps.Marker(markerOptions);

    var infoWindowOptions = {
        content: contenido,
        position: latlong
    };

    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

    google.maps.event.addListener(marker, "click", function () {
        infoWindow.open(mapa);
    });
}


