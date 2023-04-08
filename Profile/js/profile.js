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

let tagSet = document.getElementById('tag-set');

let dropTag = document.getElementById('drop-tag');

let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');

li1.innerText = 'Important';
li2.innerText = 'Notice';
li3.innerText = 'Offtopic';

dropTag.appendChild(li1);
dropTag.appendChild(li2);
dropTag.appendChild(li3);

li1.addEventListener('click', function(){
    tagSet.innerText = li1.innerText;
    tagSet.style.color = '#DC4A4A';
})
li2.addEventListener('click', function(){
    tagSet.innerText = li2.innerText;
    tagSet.style.color = '#F2B05C';
})
li3.addEventListener('click', function(){
    tagSet.innerText = li3.innerText;
    tagSet.style.color = '#858585';
})





