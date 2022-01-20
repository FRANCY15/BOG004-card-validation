//import validator from './validator.js';

document.getElementById('Comprar').addEventListener('click', obtenerNumTC);

function obtenerNumTC(){
    let numeroTC = document.getElementById('numeroTC').value;
    console.log(numeroTC)
}

function mostrarTienda(){
    document.getElementById('ProcesarCompra').style.display='block';
}


// document.getElementById('Pagar').addEventListener('click', displayComprar);

// function displayComprar () {
//     document.getElementById('ProcesarCompra').style.display='block';


