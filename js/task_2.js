const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainerLiEl = document.querySelector('.ingredients');

const makeIngredientsLiEl = products => {
    return ingredients.map(product => {
        const ingredientsLiEl = document.createElement('li');
        ingredientsLiEl.textContent = product;
        return ingredientsLiEl;
    })
};

const element = makeIngredientsLiEl(ingredients);

// console.log(element);
 
ingredientsContainerLiEl.append(...element)