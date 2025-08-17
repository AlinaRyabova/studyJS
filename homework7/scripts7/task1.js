// Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

if (confirm("Почати виведення?")) {
  function getSeason(month) {
    if (month < 1 || month > 12) {
      return "Невірний номер місяця";
    }
    if (month >= 3 && month <= 5) {
      return "Весна";
    } else if (month >= 6 && month <= 8) {
      return "Літо";
    } else if (month >= 9 && month <= 11) {
      return "Осінь";
    } else {
      return "Зима";
    }
  }

  let month = parseInt(prompt("Введіть номер місяця (1-12):"));
  document.write(
    `Місяць ${month} відноситься до пори року: ${getSeason(month)}`
  );
}
