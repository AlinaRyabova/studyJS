// Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була мінімальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

if (confirm("Почати виведення?")) {
  let visitors = [15, 30, 12, 25, 40, 18, 10];

  let min = visitors[0];
  let totalWorkdays = 0;
  let totalWeekend = 0;

  document.write("Дні, коли менше ніж 20 відвідувачів: ");
  for (let i = 0; i < visitors.length; i++) {
    if (visitors[i] < 20) {
      document.write(i + 1 + " ");
    }
  }
  document.write("<br>");

  for (let i = 1; i < visitors.length; i++) {
    if (visitors[i] < min) {
      min = visitors[i];
    }
  }

  document.write("Дні з мінімальною кількістю (" + min + "): ");

  for (let i = 0; i < visitors.length; i++) {
    if (visitors[i] === min) {
      document.write(i + 1 + " ");
    }
  }
  document.write("<br>");

  for (let i = 0; i < visitors.length; i++) {
    if (i < 5) {
      totalWorkdays += visitors[i];
    } else {
      totalWeekend += visitors[i];
    }
  }

  document.write("Загалом у робочі дні: " + totalWorkdays + "<br>");
  document.write("Загалом у вихідні: " + totalWeekend + "<br>");
}
