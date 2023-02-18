var cart_products = [];
const header = document.getElementById('HEADER');

var cart = document.getElementById('shopping-cart');

function addProduct(event) {
  id = event.srcElement.id.split('-')[2];
  cart_products.push(id);
  cart.textContent = `В корзину(${cart_products.length} товаров)`;
  // header.scrollIntoView();
}

var buttons = document.getElementsByClassName('product-buy');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', addProduct);
}

cart.addEventListener('click', (function () {
  sessionStorage['cart'] = JSON.stringify(cart_products);
  window.open("cart.html");
}))
