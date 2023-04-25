const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!'), 2000)
      : reject(new Error('Error'));
  });
}

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something); // ya que devuelve un objeto promise, se puede usar el método then
  console.log('Hola');
}

console.log('Before');
anotherFn();
console.log('After');

// Salida:
// Before
// After
// Async!!
// Hola
