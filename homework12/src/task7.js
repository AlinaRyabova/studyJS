"use strict";
// Задача 7. Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
/**
 * Створення двовимірного масиву (4x8) з номерами днів місяця
 * @param rows кількість рядків
 * @param cols кількість стовпців
 * @param totalDays загальна кількість днів у місяці
 * @returns двовимірний масив з номерами днів місяця
 */
const rows = 4;
const cols = 8;
const totalDays = 31;
let calendar = [];
let dayCounter = 1;
for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
        if (dayCounter <= totalDays) {
            row.push(dayCounter++);
        }
        else {
            row.push(0);
        }
    }
    calendar.push(row);
}
console.log("Календарний місяць (4x8):<br>");
console.table(calendar);
/**
 * Підрахунок кількості неділь у кожному рядку
 * @param calendar двовимірний масив з номерами днів місяця
 * @return кількість неділь у кожному рядку
 */
for (let i = 0; i < rows; i++) {
    let sundays = calendar[i].filter((day) => day !== 0 && day % 7 === 0).length;
    console.log(`Рядок ${i + 1} містить ${sundays} неділь`);
}
