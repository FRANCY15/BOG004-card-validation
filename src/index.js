//import validator from './validator.js';


//Elementos
let btnComprar = document.getElementById("Comprar");
let btnPagar = document.getElementById("Pagar");

//Funciones

// let frutas = ['Manzana', 'Pera', 'Naranja', 'Papaya'];
// let frutasInvertidas = frutas.reverse();
// let longitud = frutas.length;
// console.log(longitud);

// let numeroTC = [];
// numeroTC = document.getElementById('numeroTC').value;
// let numeroInvertido = numeroTC.reverse();
// console.log(numeroInvertido);
    

function obtenerTc(event) {
    event.preventDefault();
    let numeroTC = document.getElementById("numeroTC").value;
    let cadena = numeroTC.toString();
    let longitud = cadena.length;
    let cifra = null;
    let cifra_cad = null;
    let suma = 0;
    for (var i=0; i < longitud; i+2){
        cifra=parseInt(cadena.charAt(i))*2;
        if (cifra>9){
            cifra_cad=cifra.toString();
            cifra=parseInt(cifra_cad.charAt(0))+parseInt(cifra_cad.charAt(1));
        }
        suma += cifra;
    }
    for (var x=1; x<longitud; x+2){
        suma+= parseInt(cadena.charAt(i));
    }
    if ((suma % 10) == 0){
        console.log('Gracias por tu compra');
    }else{
        console.log('Transacción rechaza, verifique sus datos.')
    }
}



function portalPagos() {
    document.getElementById("ProcesarCompra").style.display = "block";
}
function ocultarTienda (){
    document.getElementById('tienda').style.display = 'none';
}
//Eventos
btnComprar.addEventListener("click", obtenerTc);
btnPagar.addEventListener("click", portalPagos, ocultarTienda);









