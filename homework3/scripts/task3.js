// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

let randomNumber = Math.floor(Math.random() * 5) + 1;
let guessedNumber = parseInt(prompt("Загадай число від 1 до 5: ", "1"));

if (randomNumber === guessedNumber) {
  document.write(`Вітаємо! Ви вгадали число: ${randomNumber}`);
} else {
  guessedNumber = parseInt(prompt("Невірно! Спробуйте ще раз: ", "1"));
  if (randomNumber === guessedNumber) {
    document.write(`Вітаємо! Ви вгадали число: ${randomNumber}`);
  } else {
    document.write(
      `На жаль, ви не вгадали. Загадане число було: ${randomNumber}`
    );
  }
}
