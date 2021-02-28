
//1-й вариант
const sub = document.querySelector("[data-action='increment']");
const add = document.querySelector("[data-action='decrement']");
const span = document.querySelector('#value');
const wrapper = document.querySelector('#counter ');

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  span.textContent = counterValue;
};
sub.addEventListener('click', increment);
add.addEventListener('click', decrement);






