let form = document.querySelector('.formulario');
let inputs = form.querySelectorAll('input');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let errorIcon = document.querySelectorAll('.area--form .icon-error');
    let errorMessage = document.querySelectorAll('.area--form em');

    for (let i=0; i < inputs.length; i++) {
        if (inputs[i] == email) {
            emailError = errorIcon[i];
            emailMessage = errorMessage[i];
        }

        if (inputs[i].value == "") {
            errorIcon[i].style.display = 'block';
            errorMessage[i].innerHTML = `${inputs[i].placeholder} cannot be empty`;
            inputs[i].classList.add('border-error');
        } else {
            errorIcon[i].style.display = 'none';
            errorMessage[i].innerHTML = '';
            inputs[i].classList.remove('border-error');
        }        
    }


    if(!validateEmail(email.value)) {
        email.classList.add('border-error');
        emailError.style.display = 'block';
        emailMessage.innerHTML = 'Looks like this is not an e-mail';
    } else {
        email.classList.remove('border-error');
        emailError.style.display = 'none';
        emailMessage.innerHTML = '';
    }

})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}