const categoriEl = document.querySelector('.categories');


const categoriItemEl = categoriEl.children;
console.log(categoriItemEl.length);

const categoriTitleEl = document.querySelectorAll('li.item');
console.log(categoriTitleEl);



 categoriTitleEl.forEach((ite) => console.log(`Категория: ${ite.firstElementChild.textContent}, Количество: ${ite.lastElementChild.length}`)); 



