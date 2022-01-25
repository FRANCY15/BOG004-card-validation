const validator = {

    isValid: function (numeroTC) {
        // event.preventDefault();
        let cadena = numeroTC.toString();
        let longitud = cadena.length;
        let cifra = null;
        let cifra_cad = null;
        let suma = 0;
        let numero = [];
        for (var i=0; i < longitud; i++){
            numero.push(cadena[i])        
        }
        numero = numero.reverse();
        let longitud1 = numero.length;
        for(var x=1; x < longitud1; x+=2){
            cifra = parseInt(numero[x])*2;
            if(cifra>9){
                cifra_cad=cifra.toString();
                cifra=parseInt(cifra_cad.charAt(0))+parseInt(cifra_cad.charAt(1));
            }
            suma += cifra;
            }
        for (var y=0; y<longitud; y+=2){
            suma+= parseInt(numero[y]);
        }
        if ((suma % 10) == 0){
            return(true);
        }else{
            return(false)
        }
    },
    
    maskify: function (numeroTC){
        let CreditNumberArray = numeroTC.toString();
        let longitud = CreditNumberArray.length;
        let numeroEnmascarado = "";
        for (let i=0; i<longitud-4; i++){
            numeroEnmascarado += "#";
         }
        document.getElementById('numeroTC').value = (numeroEnmascarado +  CreditNumberArray.slice(-4));
    }
    
};

export default validator;
