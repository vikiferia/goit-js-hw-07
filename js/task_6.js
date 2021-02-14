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
    if (event.currentTarget.value > 6) {
        return onBlur;
    }
           
};