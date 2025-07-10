
const userInput = document.getElementById('user-input');
const addButton = document.getElementById('add');
const groceryList = document.getElementById('groceries');
const feedback = document.getElementById('error');


function addItem() {
  const listItem = document.createElement('li');

  if (userInput.value.trim() !== "") {
    listItem.textContent = userInput.value;
    groceryList.appendChild(listItem);
    feedback.textContent = "";
    userInput.value = "";
    userInput.focus();
  } else {
    feedback.textContent = "Nothing entered!";
  }
}

addButton.addEventListener('click', addItem);
