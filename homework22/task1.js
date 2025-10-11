// Задача 18. Користувач може змінювати колір фону, що вибирає користувач з використанням
// <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.

const colorPicker = document.getElementById("colorPicker");
const counterEl = document.getElementById("counter");

let sessionChangeCount = 0;

const savedColor = localStorage.getItem("bgColor");

if (savedColor) {
  document.body.style.backgroundColor = savedColor;
  colorPicker.value = savedColor;
}

colorPicker.addEventListener("input", () => {
  const selectedColor = colorPicker.value;

  document.body.style.backgroundColor = selectedColor;
  localStorage.setItem("bgColor", selectedColor);

  sessionChangeCount++;
  counterEl.textContent = sessionChangeCount;
});
