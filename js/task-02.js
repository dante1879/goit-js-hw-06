const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngridients = document.querySelector("ul#ingredients");

const liToAppend = [];

ingredients.forEach((ing) => {
  const li = document.createElement('li');
  li.textContent = ing;
  li.classList.add('item');
  liToAppend.push(li);
});

ulIngridients.append(...liToAppend);