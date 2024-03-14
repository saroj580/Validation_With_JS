var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is Required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "write full name";
        return false;
    }
    //nameError.innerHTML = <i class="fa-regular fa-circle-check"></i>
    //nameError.innerHTML = <i class='bx bx-check-circle'></i>;
    nameError.innerHTML = "valid";
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone no. is Required";
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone no. should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only digits Please";
        return false;
    }
    // phoneError.innerHTML = <i class="fa-regular fa-circle-check"></i>
    // phoneError.innerHTML = <i class='bx bx-check-circle'></i>;
    phoneError.innerHTML = "valid";
    return true;
}

function validateEmail(){
    var  email = document.getElementById("contact-email").value;

    if(email.length === 0) {
        emailError.innerHTML = "Email is Required";
        return false;
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    emailError.innerHTML = "valid";
    // emailError.innerHTML = <i class="fa-regular fa-circle-check"></i>
    // emailError.innerHTML = <i class='bx bx-check-circle'></i>;
    return true;
}

function validateMessage(){
    var message = document.getElementById("contact-message").value;

    if(message.length == 0){
        messageError.innerHTML = "Message should be write";
        return false;
    }
    else{
        messageError.innerHTML = "Valid";
        return true;
    }
}
