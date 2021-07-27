// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса.

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const counterSpan = document.querySelector("#value");
const increment = () => {
  counterValue += 1;
  counterSpan.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  counterSpan.textContent = counterValue;
};


let counterValue = 0;

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);


