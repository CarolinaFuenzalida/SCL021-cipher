// import cipher from './cipher.js';

//console.log(cipher); 

function cipher() {
  var msj = document.getElementById("texto").value;
  var encrypt = document.getElementById("rango").value;
  const array = msj.split("");
  var resultado = "";
  for (var i = 0; i < array.length; i++) {
      var numAscii = array[i].charCodeAt();
      let posicion = parseInt(numAscii += (encrypt * 1));
      if (posicion > 90) {
          posicion = 65 + (encrypt * 1) - 1;
      }
      array[i] = String.fromCharCode(posicion);
      resultado += array[i];
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
      if (posicion < 65) {
          posicion = 90 - (encrypt * 1) + 1;
      }
      array[i] = String.fromCharCode(posicion);
      resultado += array[i];
  }


  document.getElementById("resultado").innerHTML = resultado;
};
