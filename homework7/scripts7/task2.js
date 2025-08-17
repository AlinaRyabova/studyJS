// Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

if (confirm("Почати виведення?")) {
  function isWorkingDay(day) {
    return day >= 1 && day <= 5; // Пн-Пт - робочі дні
  }

  let day = parseInt(prompt("Введіть номер дня тижня (1-7):"));

  if (day < 1 || day > 7) {
    document.write(
      "Неправильний номер дня. Будь ласка, введіть число від 1 до 7."
    );
  } else {
    let result = isWorkingDay(day) ? "Робочий день" : "Вихідний день";
    document.write(`День номер ${day} - ${result}.`);
  }
}
