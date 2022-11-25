// Synchronous Programming
const http = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
console.log(http)

// http
//   .then((response) => response.json())
//   .then((kula) => {
//     console.log(kula[0].name);
//   });

const req = 'bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

fetch(req)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Hii ndo error: ${response.status}`)
    }
    return response.json();
  })
  .then((oooh) => {
    console.log(oooh[0].name);
  })
  .catch((error) => {
    console.log(`We have ${error}<<<<< error`);
  })

console.log('Started request');
