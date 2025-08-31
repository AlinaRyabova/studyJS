// Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
const size = 6;
const shipsCount = 5;
let field = Array.from({ length: size }, () => Array(size).fill(0));

let placed = 0;
while (placed < shipsCount) {
  const row = Math.floor(Math.random() * size);
  const col = Math.floor(Math.random() * size);
  if (field[row][col] === 0) {
    field[row][col] = 1;
    placed++;
  }
}

let attempts = 10;
let sunk = 0;

while (attempts > 0 && sunk < shipsCount) {
  const row = Math.floor(Math.random() * size);
  const col = Math.floor(Math.random() * size);

  console.log(`(Стріляємо в (${row}, ${col})`);

  if (field[row][col] === 1) {
    console.log("Влучив у корабель!");
    field[row][col] = "X";
    sunk++;
  } else if (field[row][col] === 0) {
    console.log("Мимо!");
    field[row][col] = "*";
  } else {
    console.log("Сюди вже стріляли!");
  }

  attempts--;
}

if (sunk === shipsCount) {
  console.log("Вітаю! Усі кораблі потоплено!");
} else {
  console.log("Гру закінчено. Не всі кораблі знищені.");
}

console.log("Фінальне поле:");
console.log(field);
