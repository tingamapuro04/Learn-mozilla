const mimi = {
  name: 'Alphonce Mobutu',
  age: 24,
  ethnicity: 'Luo',
};

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // Typical action to be performed when the document is ready:
    // document.getElementById('demo').innerHTML = xhttp.responseText;
    console.log(xhttp.responseText);
  }
};
xhttp.open('GET', 'mimi.json', true);
xhttp.send();
