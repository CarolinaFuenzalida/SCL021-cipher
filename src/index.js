import cipher from "./cipher.js"

  // var abecedario =  ???
  let botonCifrar = document.getElementById("cifrar"); // botón para llamar a encode
  let botonDescifrar = document.getElementById("descifrar"); //botón para llamar a decode
  let textoCifrado = document.getElementById("resultado");  // resultado que se mostrara como respuesta

  
  botonCifrar.addEventListener('click', mostrarCifrado) // click llama a accion a la funcion encode

function mostrarCifrado(){ // funcion que envia los datos puesto por el usuario a cipher.js
  let msje = document.getElementById("texto").value;
 if (msje === '') {   
   alert  ("Debes ingresar texto");
 }
  let offset = document.getElementById("rango").value; //dato de input 
  let cifradoMsje = cipher.encode(msje,offset); //datos enviados
  textoCifrado.value = cifradoMsje; // datos recibidos son igual a respuesta
}

botonDescifrar.addEventListener('click', mostrarDescifrado)

function mostrarDescifrado(){
  let msje = document.getElementById("texto").value;
  let offset = document.getElementById("rango").value;
  let cifradoMsje = cipher.decode(msje,offset);
  textoCifrado.value = cifradoMsje;
}
  

//console.log(cipher); 