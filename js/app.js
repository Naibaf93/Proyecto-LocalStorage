// Variables

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento este listo 
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];
        console.log(tweets);

        crearHtml();
    });
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

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Añadir arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregado vamos a crear el html
    crearHtml();

    // Reinciar el formulario
    formulario.reset();
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

// Muestra un listado de los tweets
function crearHtml() {

    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            // Crear el HTML
            const li = document.createElement('li');

            //Añadir el texto
            li.innerText = tweet.tweet;

            // Insertarlo en el HTML
            listaTweets.appendChild(li);    
        });
    }

    sincronizarStorage();   
}

// Agrega los tweets actuales a localstorage

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Limpiar el HTML

function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}