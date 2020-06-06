function esconde(frase, salto) {
  var caracteres = frase.split("");
  var codigoCaracteres = [];
  var letrasCodificadas = [];
  
    //mudando valor dos charcodes
    for(var i = 0; i < caracteres.length; i++) {
      var codigoLetra = caracteres[i].charCodeAt(0);
      codigoCaracteres.push(codigoLetra + salto);
    }
  
    //colocar letras dentro de letrasCodificadas a partir do código das letras
    for (var i = 0; i < codigoCaracteres.length; i++ ) {
      //String.fromCharCode() utilizada para transformar códigos em caracteres
      letrasCodificadas.push(String.fromCharCode(codigoCaracteres[i]));
    }
  
  return letrasCodificadas.join("");

}

function revela(fraseCod, salto) {
  //nosso código vai aqui
  var caracteres = fraseCod.split("");
  var codigoCaracteres = [];
  var letrasCodificadas = [];
  
    //mudando valor dos charcodes
    for(var i = 0; i < caracteres.length; i++) {
      var codigoLetra = caracteres[i].charCodeAt(0);
      codigoCaracteres.push(codigoLetra - salto);
    }
  
    //colocar letras dentro de letrasCodificadas a partir do código das letras
    for (var i = 0; i < codigoCaracteres.length; i++ ) {
      //String.fromCharCode() utilizada para transformar códigos em caracteres
      letrasCodificadas.push(String.fromCharCode(codigoCaracteres[i]));
    }
  
  return letrasCodificadas.join("");
 
}
