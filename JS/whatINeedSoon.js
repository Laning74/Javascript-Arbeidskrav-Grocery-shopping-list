let groceryList2 = document.getElementById("grocery-list2");

groceryArray2 = [];

function addGroceryList2() {
  let inputField2 = document.getElementById("input-field2").value;
  if (inputField2 === "") {
    alert("Du må skrive inn en vare du snart trenger og kjøpe mere av");
  } else {
    groceryArray2.push({ name: inputField2 });
    document.getElementById("input-field2").value = "";
    listGrocery2();
  }
}
function listGrocery2() {
  groceryList2.innerHTML = "";
  for (let i = 0; i < groceryArray2.length; i++) {
    groceryList2.innerHTML += `<li><p>${groceryArray2[i].name}</p>
    <button id="delete-btn" onclick="deleteGrocery2(${i})"><i class="fas fa-trash"></i></button></li>`;
  }
}

function deleteGrocery2(i) {
  let askUser = prompt(
    "Er du sikker på at du vil slette denne varen fra lista? Ja/Nei"
  );
  askUser = askUser.toLowerCase();
  if (askUser === "ja") {
    groceryArray2.splice(i, 1);
  } else {
    alert("Ingen varer er slettet!");
  }
  listGrocery2();
}
