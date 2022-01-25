import validator from './validator.js';


//Elementos
let btnComprar = document.getElementById("Comprar");
let btnPagar = document.getElementById("Pagar");
let btnValidar = document.getElementById("Validar");

//Funciones
function EnmascararTC (event){
    event.preventDefault();
    let numeroTC = document.getElementById("numeroTC").value;
    validator.maskify(numeroTC);
}

function comprar (numeroTC){
    if (validator.isValid(numeroTC)===true){
        alert('Gracias')
    }else{
        alert('Verificar')
    }
}

function portalPagos() {
    document.getElementById("ProcesarCompra").style.display = "block";
    document.getElementById('tienda').style.display = 'none';
}

//Eventos
btnComprar.addEventListener("click", comprar);
btnPagar.addEventListener("click", portalPagos);
btnValidar.addEventListener("click", EnmascararTC);









