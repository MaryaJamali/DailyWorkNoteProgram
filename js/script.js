// Find page elements
var addButton = document.getElementById("add-btn");
var todoInput = document.getElementById("todo-input");
var ul = document.getElementById("todo-list");
var item = document.getElementsByTagName("li");

function inputValidation() {
    return input.value.length;
}


// Add event
addButton.addEventListener("click", addListAfterClick);
todoInput.addEventListener("keypress", addListAfterClickKeyPress);