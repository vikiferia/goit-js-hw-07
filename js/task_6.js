"use strict";

const validationInput = document.querySelector('#validation-input');

 validationInput.addEventListener('focus', onFocus);
validationInput.addEventListener('blur', onBlur);
validationInput.addEventListener('input', onInput);

 function onFocus() {
    return validationInput.classList.add("valid");
};

function onBlur() {    
return validationInput.classList.add("invalid");
           
};

function onInput (event) {    
    console.log(event.currentTarget.value);
    const dataLength = 6;
    if (event.currentTarget.value.length > dataLength) {
        validationInput.classList.remove("valid");
       return validationInput.classList.add("invalid");
    }
           
};