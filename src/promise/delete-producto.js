const fetch = require('node-fetch');
const API = 'https://api.escuelajs.co/api/v1';

function deleteProduct(productId) {
  const url = `${API}/products/${productId}`;
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.error(error));
}

deleteProduct(238)
  .then(data => console.log(data))
  .catch(error => console.error(error));
