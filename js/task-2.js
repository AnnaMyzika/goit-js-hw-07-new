const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');

const itemEl = elName => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = elName;

    return ingredientEl;
};

const renderListEl = (elList) => {
    const ingredientsElements = elList.map(el => itemEl(el));
    listEl.append(...ingredientsElements);
};

renderListEl(ingredients);


