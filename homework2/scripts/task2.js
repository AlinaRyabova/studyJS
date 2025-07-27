// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
const currentYear = parseInt(prompt("Введіть поточний рік:"));
const birthYear = parseInt(prompt("Введіть рік народження:"));

const age = currentYear - birthYear;
document.write(`
    <p>Вам ${age} років.</p>`);
