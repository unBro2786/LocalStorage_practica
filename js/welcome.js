let encabezado = document.getElementById("h1Saludo");

function cargarSaludo() {
    let storagedNombre = localStorage.getItem("nombre");

    if (localStorage.getItem("nombre") != null) {
        encabezado.innerText = `Hola, ${storagedNombre} bienvenido/a de nuevo`;
    } else {
        encabezado.innerText = `Regresa al index e ingresa tu nombre`;
    }
}

window.addEventListener("load", cargarSaludo);
