// Задача 4. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;

if (confirm("Почати виведення?")) {
  let plates = [];
  let count = parseInt(prompt("Скільки номерів автомобілів ви хочете ввести?"));

  for (let i = 0; i < count; i++) {
    plates.push(prompt(`Введіть номер автомобіля ${i + 1}:`));
  }

  let countStartsWithA = 0;
  let countFirstLastMatch = 0;
  let countLongerThanFive = 0;

  for (let i = 0; i < plates.length; i++) {
    let plate = plates[i];

    if (plate[0] === "A") {
      countStartsWithA++;
    }

    if (plate[0] === plate[plate.length - 1]) {
      countFirstLastMatch++;
    }

    if (plate.length > 5) {
      countLongerThanFive++;
    }
  }

  document.write(
    `Кількість номерів, які починаються на букву "А": ${countStartsWithA}<br>
     Кількість номерів, де перша і остання літери співпадають: ${countFirstLastMatch}<br>
     Кількість номерів, які складаються з більше ніж 5 символів: ${countLongerThanFive}`
  );
}
