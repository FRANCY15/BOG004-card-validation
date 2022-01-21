const validator = {
  
  function isValid (numeroTC){
    let numeroTC = [];
    numeroTC = document.getElementById("numeroTC").value;
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
        alert('Gracias por tu compra');
    }else{
        alert('Transacción rechaza, verifique sus datos.')
    }
    

}
};

export default validator;
