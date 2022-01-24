//import validator from './validator.js';


//Elementos
let btnComprar = document.getElementById("Comprar");
let btnPagar = document.getElementById("Pagar");

//Funciones
// function isValid() {
//     // event.preventDefault();
//     let numeroTC = document.getElementById("numeroTC").value;
//     let cadena = numeroTC.toString();
//     let longitud = cadena.length;
//     let cifra = null;
//     let cifra_cad = null;
//     let suma = 0;
//     let numero = [];
//     for (var i=0; i < longitud; i++){
//         numero.push(cadena[i])        
//     }
//     let longitud1 = numero.length;
//     for(var x=0; x < longitud1; x+=2){
//         cifra = parseInt(numero[x])*2;
//         if(cifra>9){
//             cifra_cad=cifra.toString();
//             cifra=parseInt(cifra_cad.charAt(0))+parseInt(cifra_cad.charAt(1));
//         }
//         suma += cifra;
//         }
//     for (var y=1; y<longitud; y+=2){
//         suma+= parseInt(numero[y]);
//     }
//     if ((suma % 10) == 0){
//         alert('Gracias por tu compra');
//     }else{
//         alert('Transacción rechazada, verifique sus datos.')
//     }
// }

// function maskify(){
//     let numeroTC = document.getElementById('numeroTC').value;
//     let cadena = numeroTC.toString();
//     let longitud = cadena.length;
//     let digitosTC = [];
//     for (var i=0; i < longitud; i++){
//         digitosTC.push(cadena[i]);
//     }
//     let ultimasCifras = digitosTC.slice(-4);
//     let mask_symbol = '#';
//     let mask_card = mask_symbol.repeat(12) + ultimasCifras;
// }

function maskify (){
    let numeroTC = document.getElementById('numeroTC').value;
    let cadena = numeroTC.toString();
    let longitud = cadena.length;
    let numeroEnmascarado = "";
    for (let i=0; i<longitud-4; i++){
        numeroEnmascarado += "#";
    }
    console.log(numeroEnmascarado + cadena.slice(-4));

}

function portalPagos() {
    document.getElementById("ProcesarCompra").style.display = "block";
    document.getElementById('tienda').style.display = 'none';
}

//Eventos
btnComprar.addEventListener("click", maskify);
btnPagar.addEventListener("click", portalPagos);









