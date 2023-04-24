"use strict";

// Update a product
var fetch = require('node-fetch');

var API = 'https://api.escuelajs.co/api/v1';

function getData(urlApi) {
  var response = fetch(urlApi);
  return response;
}

getData("".concat(API, "/products/215"));