const sec = document.querySelector('section');
const para1 = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');
const para4 = document.createElement('p');
let NoOfKittens = 0;
let female = 0;
let male = 0;

const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

function displayInfo(data) {
  console.log(data);
  const kittenObj = JSON.parse(data);
  const names = [];
  kittenObj.forEach((element) => {
    NoOfKittens += element.kittens.length;
    element.kittens.forEach((kitt) => {
      if (kitt.gender === 'f') {
        female += 1;
      } else if (kitt.gender === 'm') {
        male += 1;
      }
    });
    names.push(element.name);
  });
  const ship = names.join(', ');
  para1.textContent = ship;
  para2.textContent = `We have ${NoOfKittens} kittens from all the mothers.`;
  para3.textContent = `We have ${male} male kittens.`;
  para4.textContent = `We have ${female} female kittens.`;
}

fetch(requestUrl)
  .then((response) => response.text())
  .then((text) => displayInfo(text));

sec.appendChild(para1);
sec.appendChild(para2);
sec.appendChild(para3);
sec.appendChild(para4);
