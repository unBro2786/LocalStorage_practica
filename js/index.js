let submitButton = document.getElementById("submitButton");
let limpiarButton = document.getElementById("limpiarButton");

/* La función almacenara el nombre en el localstorage */
function submitButtonEvent() {
    let inputNombre = document.getElementById("nombre").value;
    localStorage.setItem("nombre", inputNombre);
}

function limpiarButtonEvent() {
    localStorage.clear("nombre");
}

submitButton.addEventListener("click", submitButtonEvent);
limpiarButton.addEventListener("click", limpiarButtonEvent);
