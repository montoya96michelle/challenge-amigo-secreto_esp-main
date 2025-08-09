let amigos = [];


// boton agregar amigo a la lista
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre === "" ||  Number(nombre)) {
        alert("Por favor, inserte un nombre.");
        limpiarCampo();
        return;
    } else {
        amigos.push(nombre);
        limpiarCampo();
        console.log(amigos);
    }
}

// borrar el texto del campo de entrada
function limpiarCampo() {
    document.getElementById('amigo').value = "";
}