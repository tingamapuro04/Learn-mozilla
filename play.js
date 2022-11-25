// Synchronous Programming
const http = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
console.log(http)

// http
//   .then((response) => response.json())
//   .then((kula) => {
//     console.log(kula[0].name);
//   });

const req = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

fetch(req)
  .then((response) => response.json())
  .then((oooh) => {
    console.log(oooh[0].name)
  })

console.log('Started request');
