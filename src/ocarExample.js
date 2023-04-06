function plus(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback){
  return callback(num1, num2);
}

// function calc(num1, num2, sumarNumeros){
//  return sumarNumeros(num1, num2);
// }
// it not needs to be called callback, it can be called whatever you want

console.log(calc(2, 3, plus))


// Another example, with setTimeout

setTimeout(function(){
  console.log('Hola mundo');
}, 3000)