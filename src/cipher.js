const cipher = {
  encode: function (msje, offset) {
    const array = msje.toString().split(""); // el array se divide
    var resultado = ""; // variable donde se guardará el string que dé como resultado
    for (var i = 0; i < array.length; i++) {
      var numAscii = array[i].charCodeAt(); // se asigna a cada caracter su valor ascii
      if (numAscii >= 65 && numAscii <= 90) { //verifica que las letras ingresadas sean mayusculas
        let posicion = ((numAscii - 65 + offset * 1) % 26) + 65; // se suma el numero ascii a el valor en cual se quiere encriptar el mensaje
        array[i] = String.fromCharCode(posicion); // se trae de vuelta el numero ascii a caracter
        resultado += array[i]; // se juntan todos los valores devueltos en el array
      } else if (numAscii >= 97 && numAscii <= 122) { //verifica que las letras ingresadas sean minusculas
        let posicion = ((numAscii - 97 + offset * 1) % 26) + 97;
        array[i] = String.fromCharCode(posicion);
        resultado += array[i];
      } else if (numAscii == 32) { //verifica que el valor ingresado sea un espacio
        array[i] = String.fromCharCode(32);
        resultado += array[i];
      } else {
        resultado += array[i];
        //alert("Porfavor ingresa letras Mayúsculas, Minúsculas o espacios");
      }
    }
    return resultado; // se devuelve el resultado a index.js para mostrar como resultado
  },
  decode: function (msje, offset) { // lo mismo pero al reves 
    const array = msje.toString().split("");
    var resultado = "";
    for (var i = 0; i < array.length; i++) {
      var numAscii = array[i].charCodeAt();
      if (numAscii >= 65 && numAscii <= 90) {
        let posicion = ((numAscii + 65 - offset * 1) % 26) + 65;
        array[i] = String.fromCharCode(posicion);
        resultado += array[i];
      } else if (numAscii >= 97 && numAscii <= 122) {
        let posicion = (numAscii + 122 - (offset * 1) % 26) - 122;
        array[i] = String.fromCharCode(posicion);
        resultado += array[i];
      } else if (numAscii == 32) {
        array[i] = String.fromCharCode(32);
        resultado += array[i];
      } else {
        alert("Porfavor ingresa letras Mayúsculas, Minúsculas o espacios");
      }
    }
    return resultado;
  },
};
export default cipher;
