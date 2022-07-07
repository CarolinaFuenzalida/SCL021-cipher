// import cipher from './cipher.js';

//console.log(cipher); 

function cipher() {
  var msj = document.getElementById("texto").value; // tomar el texto dado por usuario
  var encrypt = document.getElementById("rango").value; // tomar el rango
  const array = msj.split(""); // crear array en donde se guardara texto y se divide letra por letra
  var resultado = ""; // crea variable de resultado vacia y al final se le agrega el valor del texto ya cifrado
  for (var i = 0; i < array.length; i++) { 
      var numAscii = array[i].charCodeAt(); // crea variable en donde se asigna el n ascii de cada letra
      let posicion = parseInt(numAscii += (encrypt * 1)); // se compara el n ascii del texto con el ingresado a rango, 
      //se deja *1 ya que el rango ingresa como string, con el *1 se convierte a number
      if (posicion > 90) { //compara que la nueva posicion sumada arriba, llegue hasta 90 que es la Z
        //si se cumple sigue hacia abajo, en donde 
          posicion = 65 + (encrypt * 1) - 1; //le puse el menos 1 pq se corria uno demas 
      }
      array[i] = String.fromCharCode(posicion); //luego lo convertimos a string desde su posicion en n ascii
      resultado += array[i]; //se guarda cada resultado formando el array y se dicta que resultado es igual al array 
      //guardado luego de que pasa por la funcion
  }

  document.getElementById("resultado").innerHTML = resultado;
};

function descifrar() {
  var msj = document.getElementById("texto").value;
  var encrypt = document.getElementById("rango").value;
  msj = msj.toUpperCase();
  const array = msj.split("");
  var resultado = "";
  for (var i = 0; i < array.length; i++) {
      var numAscii = array[i].charCodeAt();
      let posicion = parseInt(numAscii -= (encrypt * 1));
      if (posicion < 65) { // lo mismo de arriba pero todo al reves
          posicion = 90 - (encrypt * 1) + 1; // lo mismo de arriba pero se suma 
      }
      array[i] = String.fromCharCode(posicion);
      resultado += array[i];
  }


  document.getElementById("resultado").innerHTML = resultado;
};
