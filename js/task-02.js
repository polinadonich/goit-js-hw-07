// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

console.log(ingredients);



const ingredientsList = document.querySelector("ul#ingredients")
const addItems = ingredients.map((elem) => {
    const createItems = document.createElement('li')
    createItems.textContent = elem;
return createItems
}
)
ingredientsList.append(...addItems);