// Update a product
const fetch = require('node-fetch');
const API = 'https://api.escuelajs.co/api/v1';

const data = {
  "title": "New Product Course",
  "price":999,
}

function updateData(urlApi, data){
  const response = fetch(urlApi, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

data.title = "New Product Course Updated";
data.price = 1000;


updateData(`${API}/products/238`, data)
  .then(response => response.json())
  .then(data => console.log(data));