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
        listaDeAmigos();
    }
}

// borrar el texto del campo de entrada
function limpiarCampo() {
    document.getElementById('amigo').value = "";
}

// boton borrar lista de amigo y mostrar lista generada
function listaDeAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; //vacia el interior

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li> ${amigos[i]} </li>`;
    }

}