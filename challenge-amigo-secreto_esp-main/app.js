// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaNombres = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    listaNombres.push(nombre);
    actualizarLista();
    input.value = ""; 
    input.focus();    
}

function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; 

    listaNombres.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    const nombreSorteado = listaNombres[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}
