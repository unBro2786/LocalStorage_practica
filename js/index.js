/* La función almacenara el nombre en el localstorage */
function submitButtonEvent() {
    let inputNombre = document.getElementById("nombre").value;
    localStorage.setItem("nombre", inputNombre);
}

let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitButtonEvent);
