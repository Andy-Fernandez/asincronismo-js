// https://developer.mozilla.org/es/docs/Glossary/Callback_function
// just copy and paste in the console

function saludar(nombre){
  console.log("Hola " + nombre);
  // alert("Hola " + nombre);
}

function procesarEntradaDeUsuario (callback){
  var nombre = prompt("Por favor ingresa tu nombre.");
  callback(nombre);
}

procesarEntradaDeUsuario(saludar);