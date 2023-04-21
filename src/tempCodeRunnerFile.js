fetchData(`${API}/products`, function (error1, data1) {
//   if (error1) return console.error(error1);
//   fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
//     if (error2) return console.error(error2);
//     fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
//       if (error3) return console.error(error3);
//       console.log( 'Primer producto: ' , data1[0]);
//       console.log( 'Categoría: ' , data2.title);
//       console.log( 'Precio: ' , data3.name);
//     });
//   });
// });
