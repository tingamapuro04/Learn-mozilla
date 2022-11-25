// Synchronous Programming
// const http = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// console.log(http)

// // http
// //   .then((response) => response.json())
// //   .then((kula) => {
// //     console.log(kula[0].name);
// //   });

// const req = 'bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

// fetch(req)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Hii ndo error: ${response.status}`)
//     }
//     return response.json();
//   })
//   .then((oooh) => {
//     console.log(oooh[0].name);
//   })
//   .catch((error) => {
//     console.log(`We have ${error}<<<<< error`);
//   })

// console.log('Started request');



const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise2, fetchPromise3, fetchPromise1])
  .then((responses) => {
    console.log(`${responses.url}: ${responses.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  })