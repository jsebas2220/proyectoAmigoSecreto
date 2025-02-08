# Proyecto: Amigo Secreto

## Descripción del Proyecto

El proyecto "Amigo Secreto" es una aplicación web simple que permite a los usuarios organizar un sorteo de "amigo secreto". Los usuarios pueden ingresar los nombres de sus amigos, visualizarlos en una lista, y realizar un sorteo aleatorio para seleccionar un amigo secreto. Esta herramienta es ideal para eventos sociales, fiestas o reuniones donde se desea asignar regalos de manera aleatoria entre los participantes.

## Características Principales

1. **Ingreso de Nombres**:
   - Los usuarios pueden ingresar los nombres de sus amigos en un campo de texto.
   - Los nombres ingresados se agregan a una lista visible en la interfaz.

2. **Sorteo Aleatorio**:
   - Al hacer clic en el botón "Sortear amigo", se selecciona un nombre aleatorio de la lista de amigos.
   - El resultado del sorteo se muestra en tiempo real.

3. **Validaciones**:
   - Se valida que el campo de entrada no esté vacío antes de agregar un nombre.
   - Se verifica que haya al menos un amigo disponible antes de realizar el sorteo.

4. **Interfaz Responsiva**:
   - La aplicación utiliza HTML y CSS para proporcionar una interfaz limpia y fácil de usar.

## Estructura del Proyecto

El proyecto está organizado en los siguientes archivos:

```
/amigo-secreto
│
├── index.html # Archivo principal con la estructura HTML.
├── style.css # Hoja de estilos para la interfaz gráfica.
├── app.js # Código JavaScript con la lógica del sistema.
├── assets/ # Carpeta con imágenes y recursos visuales.
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md # Documentación del proyecto (este archivo).
```


## Instalación y Ejecución

### Requisitos
- Un navegador web moderno (Google Chrome, Firefox, etc.).
- No se requieren dependencias adicionales.

### Pasos para Ejecutar el Proyecto
1. Clona o descarga este repositorio en tu computadora.
2. Abre el archivo `index.html` en tu navegador preferido.
3. Usa la interfaz para agregar nombres y realizar sorteos.

## Funcionalidades Detalladas

### 1. Ingreso de Nombres
- **Descripción**: Los usuarios pueden ingresar nombres en el campo de texto y añadirlos a la lista de amigos.
- **Cómo funciona**:
  - El campo de texto (`<input>`) captura el nombre ingresado por el usuario.
  - Al hacer clic en el botón "Añadir", el nombre se agrega al array `amigos` y se muestra en la lista `<ul>` con el ID `listaAmigos`.
  - Si el campo está vacío, se muestra un mensaje de error.

### 2. Sorteo Aleatorio
- **Descripción**: Selecciona un nombre aleatorio de la lista de amigos.
- **Cómo funciona**:
  - Al hacer clic en el botón "Sortear amigo", se genera un índice aleatorio usando `Math.random()` y `Math.floor()`.
  - El nombre correspondiente al índice generado se muestra en la lista `<ul>` con el ID `resultado`.
  - Si no hay nombres disponibles, se muestra un mensaje de error.

### 3. Validaciones
- **Campo Vacío**: Si el usuario intenta agregar un nombre sin escribir nada, se muestra un mensaje de error: `"Por favor, inserte un nombre."`.
- **Sin Amigos Disponibles**: Si el usuario intenta realizar un sorteo sin haber agregado nombres, se muestra un mensaje de error: `"No hay amigos disponibles para sortear."`.

## Código Fuente

### HTML
La estructura HTML define los elementos principales de la interfaz:
- Un campo de texto para ingresar nombres.
- Botones para añadir nombres y realizar el sorteo.
- Listas para mostrar los nombres ingresados y el resultado del sorteo.

```html
<div class="input-wrapper">
    <input type="text" id="amigo" class="input-name" placeholder="Escribe un nombre">
    <button class="button-add" onclick="agregarAmigo()">Añadir</button>
</div>
<ul id="listaAmigos" class="name-list"></ul>
<ul id="resultado" class="result-list"></ul>
<button class="button-draw" onclick="sortearAmigo()">Sortear amigo</button>
```

### JavaScript
El archivo `app.js` contiene la lógica del sistema:

- Un array `amigos` para almacenar los nombres ingresados.
- Funciones para agregar nombres, realizar sorteos y actualizar la interfaz.

```JavaScript
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombre);
    input.value = "";
    actualizarListaAmigos();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
```

## CSS

El archivo `style.css` define el diseño y la apariencia de la aplicación:

- Estilos para los botones, campos de texto y listas.
- Diseño responsivo para adaptarse a diferentes tamaños de pantalla.

## Mejoras Futuras

1. **Eliminar Nombres**: Agregar un botón junto a cada nombre en la lista para eliminarlo.
2. **Sorteo Completo**: Implementar un sistema donde cada amigo tenga asignado otro amigo secreto sin repeticiones.
3. **Persistencia de Datos**: Guardar los nombres ingresados en el almacenamiento local (`localStorage`) para que no se pierdan al recargar la página.
4. **Animaciones**: Añadir animaciones para mejorar la experiencia del usuario durante el sorteo.

## Contribuciones

Si deseas contribuir al proyecto, ¡eres bienvenido! Puedes:

- Reportar errores o problemas en la sección de "Issues".
- Proponer mejoras o nuevas funcionalidades.
- Enviar un "Pull Request" con tus cambios.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.


---

### Cómo Usarlo

Simplemente copia este contenido en un archivo llamado `README.md` dentro de la carpeta raíz de tu proyecto. Luego, cuando subas tu proyecto a GitHub u otra plataforma de control de versiones, este archivo se mostrará automáticamente como la documentación principal del proyecto.

Espero que esta documentación sea útil para ti y para cualquier persona que desee entender o colaborar en el proyecto. 😊