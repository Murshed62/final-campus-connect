// start
const storedRoll = localStorage.getItem('roll');
const user = localStorage.getItem('user');
const dept = localStorage.getItem('dept');
const batch = localStorage.getItem('batch');

let userName = document.getElementById('user-namess').innerText = `${user}`;
let roll1 = document.getElementById('roll1').innerText = `${storedRoll}`;
let depName = document.getElementById('user-depts').innerText = `${dept}`;
let batchName = document.getElementById('user-batchs').innerText = `${batch}th`;

// first
let userName1 = document.getElementById('user-name121').innerText = `${user}`;
let rollFirst = document.getElementById('roll121').innerText = `${storedRoll}`;
let depNameFirst = document.getElementById('depName121').innerText = `${dept}`;
let batchFirst = document.getElementById('batchName121').innerText = `${batch}th`;


// second
let userName2 = document.getElementById('user-name2').innerText = `${user}`;
let roll2 = document.getElementById('roll2').innerText = `${storedRoll}`;
let depName2 = document.getElementById('depName2').innerText = `${dept}`;
let batchName2 = document.getElementById('batchName2').innerText = `${batch}th`;

//third
let userName3 = document.getElementById('user-name3').innerText = `${user}`; 
let roll3 = document.getElementById('roll3').innerText = `${storedRoll}`;
let depName3 = document.getElementById('depName3').innerText = `${dept}`;
let batchName3 = document.getElementById('batchName3').innerText = `${batch}th`;

// fourth
let userName4 = document.getElementById('user-name4').innerText = `${user}`; 
let roll4 = document.getElementById('roll4').innerText = `${storedRoll}`;
let depName4 = document.getElementById('depName4').innerText = `${dept}`;
let batchName4 = document.getElementById('batchName4').innerText = `${batch}th`;

//fifth
let userName5 = document.getElementById('user-name5').innerText = `${user}`; 
let roll5 = document.getElementById('roll5').innerText = `${storedRoll}`;
let depName5 = document.getElementById('depName5').innerText = `${dept}`;
let batchName5 = document.getElementById('batchName5').innerText = `${batch}th`;

//sixth
let userName6 = document.getElementById('user-name6').innerText = `${user}`; 
let roll6 = document.getElementById('roll6').innerText = `${storedRoll}`;
let depName6 = document.getElementById('depName6').innerText = `${dept}`;
let batchName6 = document.getElementById('batchName6').innerText = `${batch}th`;


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





