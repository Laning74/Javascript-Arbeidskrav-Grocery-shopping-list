alert(
  "Velkommen til DIN PERSONLIGE HANDLELISTE!\nRegistrer dine varer i 3 lister:\n1. Varer jeg har nok av hjemme:\n2. Varer jeg snart trenger å kjøpe:\n3. Varer jeg skal handle idag! Og hva vil det koste tilsammen?"
);

let groceryList = document.getElementById("grocery-list");

groceryArray = [];

function addGroceryList() {
  let inputField = document.getElementById("input-field").value;
  if (inputField === "") {
    alert("Du må skrive inn en vare du har hjemme");
  } else {
    groceryArray.push({ name: inputField });
    document.getElementById("input-field").value = "";
    listGrocery();
  }
}
function listGrocery() {
  groceryList.innerHTML = "";
  for (let i = 0; i < groceryArray.length; i++) {
    groceryList.innerHTML += `<li><p>${groceryArray[i].name}</p>
    <button id="delete-btn" onclick="deleteGrocery(${i})"><i class="fas fa-trash"></i></button></li>`;
  }
}

function deleteGrocery(i) {
  let askUser = prompt(
    "Er du sikker på at du vil slette denne varen fra lista? Ja/Nei"
  );
  askUser = askUser.toLowerCase();
  if (askUser === "ja") {
    groceryArray.splice(i, 1);
  } else {
    alert("Ingen varer er slettet!");
  }
  listGrocery();
}
