let btn = document.getElementById("login-btn");
let loginBtn = document.getElementById("login-btn").addEventListener('click', function(){
    let examRollField = document.getElementById("exam-roll-field").value;
    let passwordField = document.getElementById("password-field").value;

    const storedRoll = localStorage.getItem('roll');
    const storedPass = localStorage.getItem('password');
    
    const roll = document.getElementById("exam-roll-field");
    const rollValue = roll.value;
    const pass = document.getElementById("password-field");
    const passValue = pass.value;
    let invalidPassUser = document.getElementById("invalid-pass-user");
    if(storedRoll === rollValue && storedPass === passValue){
        window.location.href = './News Feeds/index.html';
    }
    else{
        invalidPassUser.classList.remove('d-none');
        return;
    }

    if(examRollField.length === 0 || passwordField === 0){
        invalidPassUser.classList.remove('d-none');
        return;
    }
    else{
        window.location.href = '/News Feeds/index.html';
    }
})
   
const btnOpacity = () =>{
    btn.style.transition = 'all .5s';
    btn.classList.remove('opacity-50')
}

