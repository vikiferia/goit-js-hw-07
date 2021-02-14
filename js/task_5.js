"use strict";

let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.oninput = function () {
    if (nameInput.value === '') {
       nameOutput.innerHTML = 'незнакомец';
    } else{
        nameOutput.innerHTML = nameInput.value;
        
    }
}