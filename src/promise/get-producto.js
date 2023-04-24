const fetch = require('node-fetch');
const API = 'https://api.escuelajs.co/api/v1';

function getProduct(productId) {
  const url = `${API}/products/${productId}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));
}

getProduct(238)
  .then(product => console.log(product))
  .catch(error => console.error(error));
