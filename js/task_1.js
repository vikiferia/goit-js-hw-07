const categoriEl = document.querySelector('#categories');


const categoriItemEl = categoriEl.children;
console.log(categoriItemEl.length);

const categoriTitleEl = document.querySelectorAll('li.item');
// console.log(categoriTitleEl);



 categoriTitleEl.forEach((ite) => console.log(`Категория: ${ite.firstElementChild.textContent}, Количество: ${ite.firstElementChild.nextElementSibling.children.length}`)); 

console.log(categoriTitleEl);

// const liRef = document.querySelectorAll('li.item');
// console.log(`В списке ${liRef.length} категории.`);
// for (const item of liRef) {
//   console.log(`Категория: ${item.firstElementChild.innerText}`);
//   console.log(
//     `Количество элементов: ${item.firstElementChild.nextElementSibling.children.length}`,
//   );
// }