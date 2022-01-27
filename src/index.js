import validator from './validator.js';


//Elementos
let btnComprar = document.getElementById("Comprar");
let btnPagar = document.getElementById("Pagar");
let btnValidar = document.getElementById("Validar");
let btnRegresar = document.getElementById("Regresar")

//Funciones
function EnmascararTC (event){
    event.preventDefault();
    let numeroTC = document.getElementById("numeroTC").value;
    document.getElementById('numeroTC').value = validator.maskify(numeroTC);
}

function ValidarTC (){
    let numeroTC = document.getElementById("numeroTC").value;
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
btnValidar.addEventListener("click", EnmascararTC);
btnRegresar.addEventListener("click",regresar)









