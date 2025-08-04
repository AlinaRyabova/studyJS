// З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

let name1 = prompt("Введіть ім'я першої дитини:", "Люся");
let name2 = prompt("Введіть ім'я другої дитини:", "Петро");

let candies1 = parseInt(prompt(`Скільки цукерок у ${name1}`, "8"));
let candies2 = parseInt(prompt(`Скільки цукерок у ${name2}`, "9"));

if (candies1 > candies2) {
  document.write(`${name1} має більше цукерок: ${candies1}`);
} else if (candies1 < candies2) {
  document.write(`${name2} має більше цукерок: ${candies2}`);
} else {
  document.write(
    `Кількість цукерок у ${name1} та ${name2} однакова: ${candies1}`
  );
}
