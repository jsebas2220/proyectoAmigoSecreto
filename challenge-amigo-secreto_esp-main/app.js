// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados

// Array para almacenar los nombres de los amigos
let amigos = []; 

// Función para añadir un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo'); // Obtener el input por su ID
    const nombre = input.value.trim(); // Obtener el valor del input y eliminar espacios innecesarios

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Mostrar mensaje de error si el campo está vacío
        return; // Salir de la función si no hay un nombre válido
    }

    // Actualizar el array de amigos
    amigos.push(nombre); // Añadir el nombre al array usando .push()

    // Limpiar el campo de entrada
    input.value = ""; // Restablecer el campo de texto a una cadena vacía

    // Opcional: Puedes mostrar un mensaje en la consola para verificar que el nombre se añadió
    console.log(`Amigo añadido: ${nombre}`);
     // Actualizar la lista en la interfaz
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos'); // Obtener la lista por su ID

    // Limpiar la lista existente
    lista.innerHTML = ""; // Restablecer el contenido de la lista a una cadena vacía

    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) { // Usar un bucle for para recorrer el array de amigos
        const amigo = amigos[i]; // Obtener el nombre del amigo en la posición actual

        // Crear un nuevo elemento <li>
        const li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo al contenido del <li>

        // Agregar el elemento <li> a la lista
        lista.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}

// Función para reiniciar el juego
function reiniciarSorteo() {
    // Limpiar el array de amigos
    amigos = []; // Restablecer el array de amigos a un array vacío

    // Actualizar la lista en la interfaz
    actualizarListaAmigos();

    // Limpiar el resultado
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = "";
}