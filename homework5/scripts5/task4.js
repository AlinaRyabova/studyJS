// Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем. Приклад:

if (confirm("Почати  генерувати випадкові числа?")) {
  let countNumbers = parseInt(
    prompt("Введіть кількість випадкових чисел:", "7")
  );
  document.write("<ul>");

  for (let number = 1; number <= countNumbers; number++) {
    let randomNumber = Math.floor(Math.random() * 100);
    document.write(`<li>  ${randomNumber}  </li>`);
  }

  document.write("</ul>");
}
