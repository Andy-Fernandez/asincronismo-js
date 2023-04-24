const promise = new Promise((resolve, reject) => {
  resolve('hey!')
});

const cows = 15;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`There are ${cows} cows!`);
  } else {
    reject('There are not enough cows!');
  }
});

countCows.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
}).finally(() => console.log( 'This is the end of the promise' ));
