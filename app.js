let amigos = [];
let amigoSorteado = "";
let minimaCantidadAmigos = 2;

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
        enfoqueInput();
        sortearAmigo();
        listaDeAmigos();
    }
}

// enfocar el input despues de cada ingreso
function enfoqueInput() {
    document.getElementById('amigo').focus();
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

// boton para sortear amigos
function sortearAmigo() {
    if (amigos.length < minimaCantidadAmigos) {
        alert("Agrega al menos dos amigos para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let mostrarResultado = document.getElementById('resultado');
    amigoSorteado = amigos[indiceAleatorio];
    mostrarResultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    
}