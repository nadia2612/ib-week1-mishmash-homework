const showResults = object => {
  const main = document.getElementById("main");
  const prTable = document.getElementById("table");
  if (prTable) {
    main.removeChild(prTable);
  }
  const table = document.createElement("table")
  table.setAttribute("id", "table");
  main.appendChild(table);
  Object.keys(object).forEach(key => {
    const keyName = key;
    const keyValue = object[key];
    const tr1 = table.insertRow();
    const td1 = tr1.insertCell();
    const td2 = tr1.insertCell();
    td1.innerHTML = keyName;
    td2.innerHTML = keyValue;
  });
};

const getLuke = () => {
  fetch("https://swapi.co/api/people/1/")
    .then(response => response.json())
    .then(myJson => showResults(myJson));
};

getLuke();

const getDarth = () => {
  fetch("https://swapi.co/api/people/4/")
    .then(response => response.json())
    .then(myJson => showResults(myJson));
};
