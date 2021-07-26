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



const ingredientsList = document.querySelector("#ingredients")

const addItems = ingredients => ingredients.map((elem) => {
    const createItems = document.createElement('li')
    createItems.textContent = elem;
return ingredientsList.append(createItems)
}
)
addItems(ingredients);