const products_mapping = { "0": "MindBoost", "1": "RoboPower", "2": "BigBrain" };
var target = document.getElementById('target');

function init() {
  var stored = sessionStorage['cart'];
  if (stored) cart_products = JSON.parse(stored);

  for (var i = 0; i < cart_products.length; i++) {
    var id = cart_products[i];
    var row = target.insertRow();
    var product_name = row.insertCell(0);
    product_name.innerHTML = products_mapping[id];
  }

}

addEventListener("load", init);