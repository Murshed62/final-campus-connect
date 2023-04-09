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





// page reload
const refreshPage = () => {
  window.location.reload();
};

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
});
li2.addEventListener("click", function () {
  anyTag.innerText = li2.innerText;
  anyTag.style.color = "#F2B05C";
});
li3.addEventListener("click", function () {
  anyTag.innerText = li3.innerText;
  anyTag.style.color = "#858585";
});

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

let dropCheck = document.getElementById("dropCheck");
let middleWare = document.getElementById("middleWare");
let checkCSE = document.getElementById("checkCSE");
let dropDept = document.getElementById("drop-dept");

let checkMath = document.getElementById("CheckMath");
let checkBangla = document.getElementById("CheckBangla");
let checkBusiness = document.getElementById("CheckBusiness");
let CheckChemistry = document.getElementById("CheckChemistry");
let checkLaw = document.getElementById("CheckLaw");

checkCSE.addEventListener("click", function () {
  middleWare.classList.remove("d-none");
  NewPosts();
});
checkMath.addEventListener("click", function () {
  middleWare.classList.add("d-none");
});
checkBangla.addEventListener("click", function () {
  middleWare.classList.add("d-none");
});
checkBusiness.addEventListener("click", function () {
  middleWare.classList.add("d-none");
});
CheckChemistry.addEventListener("click", function () {
  middleWare.classList.add("d-none");
});
checklaw.addEventListener("click", function () {
  middleWare.classList.add("d-none");
});

// new post

let newPost = document.getElementById("new-post");

/// inter post from localstorage

function NewPosts() {
  let posts = localStorage.getItem("posts");
  if (posts) {
    posts = JSON.parse(posts);
  } else {
    posts = [];
  }
  let allNewContent = "";
  posts.forEach((post) => {
    let tagId = "notice";
    switch (post.tag) {
      case "Notice":
        tagId = "tag-button2";
        break;
      case "Important":
        tagId = "tag-button";
        break;
      case "Offtopic":
        tagId = "tag-button3";
        break;
      default:
        tagId = "tag-button";
    }
    const newPost = `
        <div  class="newsfeedpages">
<div class="newsfeed">
    <div class="feed-user">
        <div class="user-box">
            <div class="user-info">
                <div class="user-avater">
                    <img style="border-radius: 50%;" src="./assets/shishir.png" alt="">
                </div>
                <div class="user-name-roll">
                <div class="user-name">Murshed</div>
                <div class="user-roll">- 1131</div>
    
                 </div>
    
                 <div class="user-dept-batch">
                    <div class="user-dept">CSE</div>
                    <div class="user-batch"><img class="center" src="../Ellipse 2.png" alt="">29th </div>
        
                     </div>
            </div>
        </div>

    </div>

    <div id="tag" >
        <button  class="${tagId}">
            ${post.tag}
        </button>
    </div>

    <div class="post-write">
        <p>
            ${post.text}
        </p>
    </div>


</div>
<hr>
<div class="like-comment">
    <div class="likes"><img class="align" src="Vector 1.png" alt=""> <a class="like-link" href=""><span id="count-likes">0 </span>likes</a></div>
    <div class="comment"><a href="" class="comment-link"> comments<span id="count-comments"> 0 </span></a></div>
</div>
<div class="write-comments">
    
        <div class="user-box">
           <div class="user-info">
               <div class="user-avater">
                   <img style="border-radius: 50%;" src="./assets/shishir.png" alt="">
               </div>
           </div>
       </div>
            
       <textarea id="myTextarea" placeholder="Write a comments"></textarea>
            
                <div class="emoji">
            <div class="emoji-libray">&#127773</div>
        </div>
        
</div>




</div>
        `;
    allNewContent += newPost;
  });
  middleWare.innerHTML = allNewContent + middleWare.innerHTML;
}
NewPosts();
