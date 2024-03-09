let eyeIcon = document.querySelector('#eyeicon');
let passWord = document.querySelector('#password');

eyeIcon.onclick = function(event){
    if(passWord.type == "password"){
        passWord.type = "text";
        eyeIcon.src = "view.png"
    }
    else{
        passWord.type = "password";
        eyeIcon.src = "hidden.png"
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let submitBtn = document.getElementById('submitBtn');
    let lowercaseReq = document.getElementById('lowercase');
    let uppercaseReq = document.getElementById('uppercase');
    let numberReq = document.getElementById('number');
    let specialReq = document.getElementById('special');
    let form = document.getElementById('passwordForm');

    emailInput.addEventListener('input', () => {
        validateEmail();
    });

    passwordInput.addEventListener('input', () => {
        validatePassword();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        alert('Form submitted successfully!');
    });

    function validateEmail() {
        let email = emailInput.value;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
        } else {
            emailInput.classList.remove('valid');
            emailInput.classList.add('invalid');
        }
        checkAllRequirements();
    }

    function validatePassword() {
        let password = passwordInput.value;
        let lowercaseRegex = /[a-z]/;
        let uppercaseRegex = /[A-Z]/;
        let numberRegex = /[0-9]/;
        let specialRegex = /[.,'!#]/;

        if (lowercaseRegex.test(password)) {
            lowercaseReq.classList.add('valid');
            lowercaseReq.classList.remove('invalid');
        } else {
            lowercaseReq.classList.remove('valid');
            lowercaseReq.classList.add('invalid');
        }

        if (uppercaseRegex.test(password)) {
            uppercaseReq.classList.add('valid');
            uppercaseReq.classList.remove('invalid');
        } else {
            uppercaseReq.classList.remove('valid');
            uppercaseReq.classList.add('invalid');
        }

        if (numberRegex.test(password)) {
            numberReq.classList.add('valid');
            numberReq.classList.remove('invalid');
        } else {
            numberReq.classList.remove('valid');
            numberReq.classList.add('invalid');
        }

        if (specialRegex.test(password)) {
            specialReq.classList.add('valid');
            specialReq.classList.remove('invalid');
        } else {
            specialReq.classList.remove('valid');
            specialReq.classList.add('invalid');
        }

        checkAllRequirements();
    }

    function checkAllRequirements() {
        let emailValid = emailInput.classList.contains('valid');
        let passwordValid = lowercaseReq.classList.contains('valid') &&
            uppercaseReq.classList.contains('valid') &&
            numberReq.classList.contains('valid') &&
            specialReq.classList.contains('valid');

        if (emailValid && passwordValid) {
            submitBtn.removeAttribute('disabled');
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
        }
    }
});
