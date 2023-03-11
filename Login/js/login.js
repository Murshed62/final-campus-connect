let btn = document.getElementById("login-btn");

let loginBtn = document.getElementById("login-btn").addEventListener('click', function(){

    let examRollField = document.getElementById("exam-roll-field").value;
    let passwordField = document.getElementById("password-field").value;


    let invalidPassUser = document.getElementById("invalid-pass-user");
    if(examRollField.length === 0 || passwordField === 0){
        invalidPassUser.classList.remove('d-none');
        return;
    }
    else{
        window.location.href = 'next.html';
    }
})



const btnOpacity = () =>{
    btn.style.transition = 'all .5s';
    btn.classList.remove('opacity-50')
}