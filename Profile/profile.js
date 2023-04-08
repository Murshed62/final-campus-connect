// start
const storedRoll = localStorage.getItem('roll');
const user = localStorage.getItem('user');
const dept = localStorage.getItem('dept');
const batch = localStorage.getItem('batch');

let userName = document.getElementById('user-name').innerText = `${user}`;
let roll = document.getElementById('roll').innerText = `${storedRoll}`;
let depName = document.getElementById('user-dept').innerText = `${dept}`;
let batchName = document.getElementById('user-batch').innerText = `${batch}th`;

//end


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

const button2 = document.getElementById("delete");
const list2 = document.getElementById("drop-delete");

list2.style.display = "none";

button2.addEventListener("click",(event) => {
    if(list2.style.display == "none") {
        list2.style.display = "block"; 


    }
    else{
        list2.style.display = "none";
    }
})


// Textarea sections

const textarea = document.getElementById('myTextarea');

textarea.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
});






