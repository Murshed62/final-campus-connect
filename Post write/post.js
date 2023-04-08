const myDiv = document.querySelector('#myDiv');

// Add a click event listener to the document object
document.addEventListener('click', function(event) {
  // Check if the clicked element is not the div or its descendant
  if (!myDiv.contains(event.target)) {
    // Do something, such as going back one step
    history.back();
  }
});

// start
const storedRoll = localStorage.getItem("roll");
const user = localStorage.getItem("user");
const dept = localStorage.getItem("dept");
const batch = localStorage.getItem("batch");

let userName = (document.getElementById("user-name").innerText = `${user}`);
let roll = (document.getElementById("roll").innerText = `${storedRoll}`);
let depName = (document.getElementById("user-dept").innerText = `${dept}`);
let batchName = (document.getElementById(
  "user-batch"
).innerText = `${batch}th`);
//end

const button1 = document.getElementById("btn-privacy");
const list1 = document.getElementById("drop-privacy");

list1.style.display = "none";

button1.addEventListener("click", (event) => {
  if (list1.style.display == "none") {
    list1.style.display = "block";
  } else {
    list1.style.display = "none";
  }
});

// tag dropdown
const button2 = document.getElementById("btn-tag");
const list2 = document.getElementById("drop-tag");

list2.style.display = "none";

list2.addEventListener("click", () => {
  list2.style.display = "none";
});

button2.addEventListener("click", (event) => {
  if (list2.style.display == "none") {
    list2.style.display = "block";
  } else {
    list2.style.display = "none";
  }
});

// Textarea sections

const textarea = document.getElementById("myTextarea");
// selected tag
let selectedTag;

textarea.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});

// any tag
// any tag

let anyTag = document.getElementById("any-tag");
let dropTag = document.getElementById("drop-tag");

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

li1.innerText = "Important";
li2.innerText = "Notice";
li3.innerText = "Offtopic";
li1.style.color = "#DC4A4A";
li2.style.color = "#F2B05C";
li3.style.color = "#858585";

dropTag.appendChild(li1);
dropTag.appendChild(li2);
dropTag.appendChild(li3);

li1.addEventListener("click", function () {
  anyTag.innerText = li1.innerText;
  anyTag.style.color = "#DC4A4A";
  selectedTag = "Important";
});
li2.addEventListener("click", function () {
  anyTag.innerText = li2.innerText;
  anyTag.style.color = "#F2B05C";
  selectedTag = "Notice";
});
li3.addEventListener("click", function () {
  anyTag.innerText = li3.innerText;
  anyTag.style.color = "#858585";
  selectedTag = "Offtopic";
});

let btnPrivacy = document.getElementById("btn-privacy");
let dropPrivacy = document.getElementById("drop-privacy");

let publicLi1 = document.createElement("li");
let publicLi2 = document.createElement("li");

publicLi1.innerText = "Public";
publicLi2.innerText = "Only Me";

dropPrivacy.appendChild(publicLi1);
dropPrivacy.appendChild(publicLi2);

publicLi1.addEventListener("click", function () {
  btnPrivacy.innerText = publicLi1.innerText;
});

publicLi2.addEventListener("click", function () {
  btnPrivacy.innerText = publicLi2.innerText;
});

// write post

let myTextarea = document.getElementById("myTextarea");

const newPost = () => {
  let collectText = myTextarea.value;
  const post = {
    text: collectText,
    tag: selectedTag,
  };
  let posts = localStorage.getItem("posts");
  if (posts) {
    posts = JSON.parse(posts);
  } else {
    posts = [];
  }
  posts.unshift(post);
  localStorage.setItem("posts", JSON.stringify(posts));
  location.assign("/News Feeds/index.html");
};
