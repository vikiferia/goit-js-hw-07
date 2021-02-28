"use strict";

const validationInput = document.getElementById("validation-input");

let maxLength = validationInput.getAttribute("data-length");
let inpMaxLenght = parseInt(maxLength, 10);

    validationInput.oninput = function() {
  if (validationInput.value.length === inpMaxLenght) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
  if (validationInput.value.length === 0) {
   validationInput.classList.remove("valid");
    validationInput.classList.remove("invalid");
  }
  if (validationInput.value.length !== inpMaxLenght && validationInput.value.length !== 0) {
    validationInput.classList.add("invalid");
  }
};

    validationInput.addEventListener('focus', onFocus);
    validationInput.addEventListener('blur', onBlur);


 function onFocus() {
    return validationInput.classList.add("valid");
};

function onBlur() {    
return validationInput.classList.add("invalid");
           
};

