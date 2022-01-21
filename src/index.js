//import validator from './validator.js';


//Elementos
let btnComprar = document.getElementById("Comprar");
let btnPagar = document.getElementById("Pagar");

//Funciones

function isValid() {
    // event.preventDefault();
    let numeroTC = document.getElementById("numeroTC").value;
    let cadena = numeroTC.toString();
    let longitud = cadena.length;
    let cifra = null;
    let cifra_cad = null;
    let suma = 0;
    let numero = [];
    for (var i=0; i < longitud; i++){
        numero.push(cadena[i])        
    }
    let numeroInvertido = numero.reverse();
    let longitud1 = numeroInvertido.length;
    for(var x=0; x < longitud1; x++){
        cifra = parseInt(numeroInvertido[x])*2;
        if(cifra>9){
            cifra_cad=cifra.toString();
            cifra=parseInt(cifra_cad.charAt(0))+parseInt(cifra_cad.charAt(1));
        }
        suma += cifra;
    }
    for (var y=1; y<longitud; y++){
        suma+= parseInt(numeroInvertido[y]);
    }
    if ((suma % 10) == 0){
        alert('Gracias por tu compra');
    }else{
        alert('Transacción rechaza, verifique sus datos.')
    }
}



function portalPagos() {
    document.getElementById("ProcesarCompra").style.display = "block";
    document.getElementById('tienda').style.display = 'none';
}

//Eventos
btnComprar.addEventListener("click", isValid);
btnPagar.addEventListener("click", portalPagos);









