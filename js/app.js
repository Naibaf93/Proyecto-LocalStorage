// Variables

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('lista-tweets');
let tweets = [];


// Event Listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}

// Funciones

function agregarTweet(e) {
    e.preventDefault();
    
    // Text area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validacion   
    if(tweet === '') {
        mostrarError('no puede estar vacio');

        return; // Evita que se ejecuten mas lienas de codigo
    }
}

// Mostrar mensaje de error

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido 

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Eliminar la alerta despues de 3 seg
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}