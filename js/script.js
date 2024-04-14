// Find page elements
var addButton = document.getElementById("add-btn");
var todoInput = document.getElementById("todo-input");
var ul = document.getElementById("todo-list");
var item = document.getElementsByTagName("li");

function inputValidation() {

    return todoInput.value.length;
}

function createListElement() {
    // Creating the li tag and setting its value as text and adding it to the ul tag
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todoInput.value));
    ul.appendChild(li);
    todoInput.value = "";
}

function addListAfterClick() {
    // If there was text in the input
    if (inputValidation() > 0) {
        createListElement();
    }
}

function addListAfterClickKeyPress(event) {
    // If there was a text in the input and the "Enter --> 13" key was pressed
    if (inputValidation() > 0 && event.which === 13) {
        createListElement();
    }
}

// Add event
addButton.addEventListener("click", addListAfterClick);
todoInput.addEventListener("keypress", addListAfterClickKeyPress);