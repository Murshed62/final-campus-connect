let btn = document.getElementById("create-btn");

const createBtn = document.getElementById("create-btn").addEventListener('click', function(){

    let nameField = document.getElementById("name-field").value;
    let rollField = document.getElementById("roll-field").value;
    let deptField = document.getElementById("dept-field").value;
    let batchField = document.getElementById("batch-field").value; 
    let emailField = document.getElementById("email-field").value;
    let passField = document.getElementById("pass-field").value;
    let confirmPassField = document.getElementById("confirm-pass-field").value;
    let notMatch = document.getElementById("not-match");

    
    let agreeCheckbox = document.getElementById("agree-checkbox");


    if(nameField.length === 0 || rollField === 0 || deptField === 0 || batchField === 0 || emailField === 0 || passField === 0 || confirmPassField === 0 || !agreeCheckbox.checked){
        notMatch.classList.remove('d-none');
        return;
    }
    else{
         window.location.href = '../News Feeds/index.html';    
    }
})

const btnOpacity = () =>{
    btn.style.transition = 'all .5s';
    btn.classList.remove('opacity-50')
    
}