const button1 = document.getElementById("btn-privacy");
const list1 = document.getElementById("drop-privacy");

list1.style.display = "none";

button1.addEventListener("click",(event) => {
    if(list1.style.display == "none") {
        list1.style.display = "block"; 


    }
    else{
        list1.style.display = "none";
    }
})


// edit profile
const user = localStorage.getItem('user');
const dept = localStorage.getItem('dept');
const batch = localStorage.getItem('batch');

let userName = document.getElementById('name-field').value = `${user}`;

let privacySet = document.getElementById("privacy-set");

let dropPrivacy = document.getElementById("drop-privacy");

let li1 = document.createElement('li');
let li2 = document.createElement('li');

li1.innerText = 'Public';
li2.innerText = 'Only Me';

dropPrivacy.appendChild(li1);
dropPrivacy.appendChild(li2);

li1.addEventListener('click', function(){
privacySet.innerText = li1.innerText;
})
li2.addEventListener('click', function(){
    privacySet.innerText = li2.innerText;
    })
    
