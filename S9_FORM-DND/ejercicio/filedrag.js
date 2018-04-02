// getElementById
function $id(id) {
    return document.getElementById(id);
}

// file drag hover
function FileDragHover(e) {
    e.stopPropagation();
    e.preventDefault();
    e.target.className = (e.type == "dragover" ? "hover" : "");
}

// file selection
function FileSelectHandler(e) {
    // cancel event and hover styling
    FileDragHover(e);

    // fetch FileList object
    var files = e.target.files || e.dataTransfer.files;
    var fsc = $id("fileselect");
    fsc.files = files;
}

// initialize
function Init() {
    var filedrag = $id("filedrag");

    // file drop
    filedrag.addEventListener("dragover", FileDragHover, false);
    filedrag.addEventListener("dragleave", FileDragHover, false);
    filedrag.addEventListener("drop", FileSelectHandler, false);
    filedrag.style.display = "block";
}

// call initialization file
if (window.File && window.FileList) {
    Init();
}
