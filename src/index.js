//import validator from './validator.js';

//Elementos
let btnComprar = document.getElementById("Comprar");

//Funciones
function obtenerTc(event) {
    event.preventDefault();
    let numeroTC = document.getElementById("numeroTC").value;
    console.log(numeroTC);
}

//Eventos
btnComprar.addEventListener("click", obtenerTc)