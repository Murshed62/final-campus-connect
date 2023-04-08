const button1 = document.getElementById("btn-tag");
const list1 = document.getElementById("drop-tag");

list1.style.display = "none";

button1.addEventListener("click",(event) => {
    if(list1.style.display == "none") {
        list1.style.display = "block"; 


    }
    else{
        list1.style.display = "none";
    }
})

const myDiv = document.querySelector('#myDiv');

// Add a click event listener to the document object
document.addEventListener('click', function(event) {
  // Check if the clicked element is not the div or its descendant
  if (!myDiv.contains(event.target)) {
    // Do something, such as going back one step
    history.back();
  }
});