const storedRoll = localStorage.getItem('roll');
const user = localStorage.getItem('user');
const dept = localStorage.getItem('dept');
const batch = localStorage.getItem('batch');


let userName = document.getElementById('user-name').innerText = `${user}`;
let roll = document.getElementById('roll').innerText = `${storedRoll}`;
let depName = document.getElementById('user-dept').innerText = `${dept}`;
let batchName = document.getElementById('user-batch').innerText = `${batch}th`;

// let userNamePost = document.getElementById('user-name-post').innerText = `${user}`;
// let rollPost = document.getElementById('roll-post').innerText = `${storedRoll}`;
// let deptPost = document.getElementById('dept-post').innerText = `${dept}`;
// let batchPost = document.getElementById('batch-post').innerText = `${batch}th`;

// page reload
const refreshPage = () =>{
window.location.reload();
}

// any tag

let anyTag = document.getElementById("any-tag");
let dropTag = document.getElementById("drop-tag");

let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');

li1.innerText = 'Important';
li2.innerText = 'Notice';
li3.innerText = 'Offtopic';
li1.style.color = '#DC4A4A';
li2.style.color = '#F2B05C';
li3.style.color = '#858585';

dropTag.appendChild(li1);
dropTag.appendChild(li2);
dropTag.appendChild(li3);

li1.addEventListener('click', function(){
    anyTag.innerText = li1.innerText;
    anyTag.style.color = '#DC4A4A';
})
li2.addEventListener('click', function(){
    anyTag.innerText = li2.innerText;
    anyTag.style.color = '#F2B05C';
})
li3.addEventListener('click', function(){
    anyTag.innerText = li3.innerText;
    anyTag.style.color = '#858585';
})

// post tag list
const important = document.getElementById("imp");
const notice = document.getElementById("notice");
const offTopic = document.getElementById("off-topic");

// post
const post1 = document.getElementById("post1");
const post2 = document.getElementById("post2");
const post3 = document.getElementById("post3");

// condition
const anyTagText = anyTag.innerText;
