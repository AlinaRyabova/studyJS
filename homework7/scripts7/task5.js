// Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).
if (confirm("Почати виведення?")) {
  function createTable(rows, cols, message) {
    let table = "<table border='1'>";
    for (let i = 0; i < rows; i++) {
      table += "<tr>";
      for (let j = 0; j < cols; j++) {
        table += `<td>${message}</td>`;
      }
      table += "</tr>";
    }
    table += "</table>";
    return table;
  }

  let rows = parseInt(prompt("Введіть кількість рядків:"));
  let cols = parseInt(prompt("Введіть кількість стовпців:"));
  let message = prompt("Введіть повідомлення для заповнення таблиці:");

  document.write(createTable(rows, cols, message));
}
