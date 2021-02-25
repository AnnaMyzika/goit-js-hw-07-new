const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории`);

const rezult = categories.forEach(el => console.log(`Категория: ${el.firstElementChild.textContent}\nКоличество элементов: ${el.querySelectorAll('li').length}`));

