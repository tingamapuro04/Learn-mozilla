const sec = document.querySelector('section');
const para1 = document.createElement('p')

const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

function displayInfo(data) {
  // console.log(data)
  const kittenObj = JSON.parse(data);
  const names = []
  kittenObj.forEach((element) => {
    names.push(element.name)
  })
  const ship = names.join(' - ')
  para1.textContent = ship
}

fetch(requestUrl)
  .then((response) => response.text())
  .then((text) => displayInfo(text));

sec.appendChild(para1);
