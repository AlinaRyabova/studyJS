// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

if (confirm("Почати виведення?")) {
  function sum(a, b, c, d) {
    return a + b + c + d;
  }

  function product(a, b, c, d) {
    return a * b * c * d;
  }

  function average(a, b, c, d) {
    return sum(a, b, c, d) / 4;
  }

  function min(a, b, c, d) {
    return Math.min(a, b, c, d);
  }

  let a = parseFloat(prompt("Введіть перше число:"));
  let b = parseFloat(prompt("Введіть друге число:"));
  let c = parseFloat(prompt("Введіть третє число:"));
  let d = parseFloat(prompt("Введіть четверте число:"));

  document.write(
    `Сума: ${sum(a, b, c, d)}<br>
     Добуток: ${product(a, b, c, d)}<br>
     Середнє арифметичне: ${average(a, b, c, d).toFixed(2)}<br>
     Мінімальне значення: ${min(a, b, c, d)}`
  );
}
