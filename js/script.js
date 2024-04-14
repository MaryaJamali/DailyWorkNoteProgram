// Find page elements
var addButton = document.getElementById("add-btn");
var todoInput = document.getElementById("todo-input");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputValidation() {
    // trim() --> This method removes extra spaces at the beginning and end of the entered text.
    return todoInput.value.trim().length;
}

function createListElement() {
    // Creating the li tag and setting its value as text and adding it to the ul tag
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todoInput.value));
    ul.appendChild(li);
    todoInput.value = "";

    function confirmDone() {
        // When the text is clicked, take this feature that we defined in CSS, if it has it, and give it if it doesn't have it.
        li.classList.toggle("confirm-done");
    }
    li.addEventListener("click", confirmDone);

    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click",deleteDone);

    function deleteDone() {
        li.classList.add("delete-done");
    }
}

function addListAfterClick(event) {
    event.preventDefault();
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
