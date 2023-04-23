const  XMLHttpRequest  =  require('xmlhttprequest').XMLHttpRequest; // Importamos la librería XMLHttpRequest, antes tenemso que instalr la librería con npm i xmlhttprequest
const API = 'https://api.escuelajs.co/api/v1'; // Definimos la url de la API, esta en mayuscualas porque es una constante

// fetch = buscar, traer, obtener
function fetchData(urlAPIm, callback) { // Definimos la función fetchData, recibe como parámetros la url de la API y una función callback (que es una funcion aninima para manejar el error y la respuesta o solictud de la API)
  let xhttp = new XMLHttpRequest(); // Instanciamos la función XMLHttpRequest

  xhttp.open( 'GET' , urlAPIm,  true );
  xhttp.onreadystatechange =  function (event) {
    if (xhttp.readyState === 4) {
      // readyState = 0 : El objeto se ha creado, pero no se ha llamado al método open(). No se ha inicializado la conexión.
      // readyState = 1 : Se ha llamado al método open(), pero no se ha llamado al método send(). Se ha inicializado la conexión.
      // readyState = 2 : Se ha llamado al método send(). Se están enviando los encabezados.
      // readyState = 3 : Se están enviando los datos. Se está recibiendo el cuerpo del mensaje.
      // readyState = 4 : Se ha completado la operación.
      if (xhttp.status == 200)
        // status = 200 : OK. La solicitud ha tenido éxito.
        // status = 403 : Forbidden. El servidor ha entendido la solicitud, pero se niega a cumplirla.
        // status = 404 : Not Found. El servidor no puede encontrar el recurso solicitado.
        // extra: https://developer.mozilla.org/es/docs/Web/HTTP/Status
        callback( null , JSON.parse(xhttp.responseText)); // Si la respuesta es correcta, ejecutamos la función callback, pasando como parámetro null (que significa que no hay error) y la respuesta de la API en formato JSON
      else {
        const error = new Error( 'Error '  + urlAPIm); // Si la respuesta es incorrecta, ejecutamos la función callback, pasando como parámetro un error y null (que significa que no hay respuesta)
        return callback(error, null);
      }
    }
  };
  xhttp.send(); // Enviamos la solicitud a la API
}

fetchData(`${API}/products`, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log( 'Primer producto: ' , data1[0]);
      console.log( 'Categoría: ' , data2.title);
      console.log( 'Precio: ' , data3.name);
    });
  });
});
