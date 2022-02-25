import validator from './validator.js';


//Elementos
let btnComprar = document.getElementById("Comprar");
let btnPagar = document.getElementById("Pagar");
let btnRegresar = document.getElementById("Regresar")

// //Funciones

function ValidarTC (){
    let numeroTC = document.getElementById("numeroTC").value;
    document.getElementById('numeroTC').value = validator.maskify(numeroTC);
    const validar = validator.isValid(numeroTC);
    if(validar==true){
        alert('Gracias por su compra!')
    }else{
        alert('Por favor verifique sus datos e intente nuevamente')
    }
}

function portalPagos() {
    document.getElementById("ProcesarCompra").style.display = "block";
    document.getElementById('tienda').style.display = 'none';
}
function regresar() {
    document.getElementById("tienda").style.display = "block";
    document.getElementById ("ProcesarCompra").style.display = "none";
}
//Eventos
btnComprar.addEventListener("click", ValidarTC);
btnPagar.addEventListener("click", portalPagos);
btnRegresar.addEventListener("click",regresar)









