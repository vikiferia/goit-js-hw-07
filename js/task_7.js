
const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fontSizeControl.addEventListener('change', function  () {
    textSpan.style.fontSize = fontSizeControl.value + "px";
}
);



