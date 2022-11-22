const sec = document.querySelector('section');

const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestUrl)
  .then((response) => response.text())
  .then((text) => displayInfo(text));
