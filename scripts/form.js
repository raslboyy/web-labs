
const form = document.getElementById("main");
const result_n = document.getElementById("result-n");
const tbody = document.getElementById("tbody");
const thead = document.getElementById("thead");
const table_headers = ["ФИО", "Адрес", "Номер телефона", "Дата рождения", "Баланс", "Почта", "Модель телефона", "Криминал"];

function generateTable(n, balance, fields) {
  console.log(`n = ${n}; balance = ${balance}; fields = ${fields}`);

  var stored = sessionStorage['data'];
  if (stored) raw = JSON.parse(stored);
  else console.log("not stored");
  var data = [];
  for (var i = 0; i < raw.length; i++) {
    if (raw[i][4] >= balance)
      data.push(raw[i]);
    if (data.length >= n)
      break;
  }
  result_n.textContent = `Найдено строк: ${data.length}`;

  row = thead.insertRow();
  fields.forEach(element => {
    cell = row.insertCell();
    cell.innerHTML = table_headers[element];
  });

  for (var i = 0; (i < data.length) && (i < n); i++) {
    row = tbody.insertRow();
    rr = [];
    fields.forEach(element => {
      cell = row.insertCell();
      cell.innerHTML = data[i][element];
      rr.push(data[i][element]);
    });
    console.log(rr);
  }
}

form.addEventListener("submit", (event) => {
  thead.innerHTML = '';
  tbody.innerHTML = '';

  data = form.elements;
  n = data["count"].value;
  balance = data["balance"].value;
  fields = [];
  for (var i = 2; i < 10; i++)
    if (data[i].checked)
      fields.push(data[i].value);

  generateTable(parseInt(n), parseInt(balance), fields);
  event.preventDefault();
});
