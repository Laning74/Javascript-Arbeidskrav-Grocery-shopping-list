document.querySelector("body").onclick = (e) => {
  console.log("---------------------------------");
  console.log(e.target);
};

const addForm = document.getElementById("add-form");
const inputName = document.getElementById("name");
const inputPrice = document.getElementById("price");
const itemsList = document.getElementById("items");
const divTotal = document.getElementById("total");

const cart = [];

addForm.onsubmit = function (e) {
  e.preventDefault();
  const name = inputName.value;
  const price = inputPrice.value;

  addToCart(name, price);
  showCart();
};

itemsList.onclick = function (e) {
  if (e.target && e.target.classList.contains("remove")) {
    removeFromCart(e.target.dataset.name);
  } else if (e.target && e.target.classList.contains("add-one")) {
    addToCart(e.target.dataset.name);
  } else if (e.target && e.target.classList.contains("remove-one")) {
    removeFromCart(e.target.dataset.name, 1);
  }
};

function addToCart(name, price) {
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].name === name) {
      cart[i].qty += 1;
      showCart();
      return true;
    } else if (price == 0) {
      alert("Error! Du må skrive inn en pris på produktet!");
      return;
    }
  }
  cart.push({ name, price, qty: 1 });
  showCart();
}

function removeFromCart(name, qty = 0) {
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].name === name) {
      if (qty) {
        let newQty = cart[i].qty - qty;
        if (newQty > 0) {
          cart[i].qty = newQty;
        } else {
          cart.splice(i, 1);
        }
      } else {
        cart.splice(i, 1);
      }
    }
  }

  showCart();
}

function showCart() {
  let str = "";
  for (let i = 0; i < cart.length; i += 1) {
    str += `<li>
            <span class="GrozeryList">
              ${cart[i].name} ${cart[i].price} pr stk. 
              x ${cart[i].qty} = ${(cart[i].qty * cart[i].price).toFixed(2)}
            </span>
            <span>
              <button class="remove" data-name="${
                cart[i].name
              }"><i class="fas fa-trash"></i></button>
              <button class="add-one" data-name="${
                cart[i].name
              }"><i class="fas fa-plus"></i></button>
              <button class="remove-one" data-name="${
                cart[i].name
              }"><i class="fas fa-minus"></i></button>
            </span>
          </li>`;
  }
  itemsList.innerHTML = str;
  divTotal.innerHTML = "Total beløp: " + getTotal();
}

function getTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i += 1) {
    total += cart[i].price * cart[i].qty;
  }
  return total.toFixed(2);
}

showCart();

getTotal();
