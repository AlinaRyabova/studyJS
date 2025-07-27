// Задача 0. Обчислити значення виразів

// Крок 1: Введення необхідних даних
const a = parseFloat(prompt("Введіть значення a:", "0"));
const b = parseFloat(prompt("Введіть значення b:", "0"));
const c = parseFloat(prompt("Введіть значення c:", "0"));

// Крок 2: Обчислення виразу
const S1 = a + 12 + b;
const S2 = Math.sqrt((a + b) / (2 * a));
const S3 = Math.cbrt((a + b) * c);
const S4 = Math.sin(a / -b);

// Крок 3: Виведення результату
document.write(`Результат S1 = ${S1}<br>`);
document.write(`Результат S2 = ${S2.toFixed(2)}<br>`);
document.write(`Результат S3 = ${S3.toFixed(2)}<br>`);
document.write(`Результат S4 = ${S4.toFixed(2)}<br>`);
