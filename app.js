let amigos = [];


// boton agregar amigo a la lista
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre === "" ||  Number(nombre)) {
        alert("Por favor, inserte un nombre.");
        return;
    } else {
        amigos.push(nombre);
        console.log(amigos);
    }
}
