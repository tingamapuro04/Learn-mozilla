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



// Async await programming

// async function trying() {
//   try {
//     const red = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';
//     const response = await fetch(red);
//     if (!response.ok) {
//       throw new Error(`${response.status}`);
//     }
//     const jj = await response.json();
//     console.log(jj[0].name);
//   } catch (error) {
//     console.error(`Could not get the products: ${error}`);
//   }
// }

// trying();

// Alarm API
const btn = document.querySelector('#set-alarm');
let output = document.querySelector('#demo');

const alarm = (person, delay) => new Promise((resolve, reject) => {
  if (delay < 0) {
    throw new Error('Time can never be negative');
  }
  setTimeout(() => {
    resolve(`Wake up ${person}`);
  }, 3000);
});

const amsha = () => {
  setTimeout(() => {
    output.textContent = 'please just wake up now. I am tired of ringing!!!';
  }, 4000);
};
btn.addEventListener('click', amsha);
