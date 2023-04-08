const button = document.getElementById("btn-dept");
const list = document.getElementById("drop-dept");

list.addEventListener("click", () => {
  list.style.display = "none";
});

list.style.display = "none";

button.addEventListener("click", (event) => {
  if (list.style.display == "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});

const button1 = document.getElementById("btn-tag");
const list1 = document.getElementById("drop-tag");

list1.style.display = "none";

button1.addEventListener("click", (event) => {
  if (list1.style.display == "none") {
    list1.style.display = "block";
  } else {
    list1.style.display = "none";
  }
});

// Textarea sections

const textarea = document.getElementById("myTextarea");

textarea.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});

// Get the list items and button
const myList = document.getElementById("drop-dept");
const myButton = document.getElementById("btn-dept");

// Add a click event listener to the list
myList.addEventListener("click", function (event) {
  // Get the clicked list item
  const clickedItem = event.target;

  // If the clicked item has a sub-menu, toggle its visibility

  // Update the button text with the clicked item's text
  myButton.innerText = clickedItem.innerText;

  // Close the dropdown
  myList.classList.remove("visible");
});

// Add a click event listener to the button
myButton.addEventListener("click", function () {
  // Toggle the visibility of the dropdown
  myList.classList.toggle("visible");
});
