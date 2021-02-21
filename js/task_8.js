"use strict";

const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes =  document.getElementById("boxes");
// const numbers = document.querySelector('[type="number"]');

render.addEventListener('click', getBox);
destroy.addEventListener('click', destroyBoxes);

function getBox() {
    let amount = +document.querySelector("#controls input").value;
   createBoxes(amount);
}

//console.log(getBoxes);

// let amount = +document.querySelector('#controls input').value;

function createBoxes(amount) {
    let basicSize = 30;
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++ ) {
        let size = basicSize + i * 10;
        const divElement = document.createElement("div");
        //divElement.style.backgroundColor = red;
         divElement.style.cssText = `width: ${size}px; height: ${ size }px; background-color: rgba(${random()}, ${random()},${random()} );`
        // divElement.style.cssText = `background-color: rgb(${ Math.floor(Math.random() * 100) } %, ${ Math.floor(Math.random() * 100) }%)`;
        //  divElement.style.cssText =`width: ${size} px`; 
        //  divElement.style.cssText = `height: ${ size } px`;
        // divElement.style.backgroundColor = ` rgb(${ Math.floor(Math.random(255) * 100) } %, ${ Math.floor(Math.random(255) * 100) }%)`;
        //  divElement.style.backgroundColor = `rgba(${ramdom()}, ${ramdom()},${ramdom()} )`;
        //  divElement.style.width =` ${size}px`; 
        // divElement.style.height = ` ${size}px`;
        fragment.appendChild(divElement);
      
    }

   boxes.appendChild(fragment);
    
}

function destroyBoxes() {
    boxes.innerHTML = '';

   
}

 function random () {
     return Math.floor(Math.random() * 256);  
    }

