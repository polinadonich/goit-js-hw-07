// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - 
// стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.getElementById("font-size-control")
const span = document.getElementById("text")

const slider = (event) => {
span.setAttribute("style", `font-size:${event.currentTarget.value}px`)
}

input.addEventListener("input", slider)