const myDiv = document.querySelector('#myDiv');

// Add a click event listener to the document object
document.addEventListener('click', function(event) {
  // Check if the clicked element is not the div or its descendant
  if (!myDiv.contains(event.target)) {
    // Do something, such as going back one step
    history.back();
  }
});