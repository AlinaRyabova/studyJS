"use strict";
// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
let names = ["Ivan", "Olga", "Petro", "Anna", "Sergiy"];
/**
 * Бінарний пошук
 * @param arr4 масив рядків(імен)
 * @param target рядок(ім'я) для пошуку
 * @returns повертає індекс знайденого елемента або -1, якщо елемент не знайдено
 */
function binarySearch(arr4, target) {
    let left = 0;
    let right = arr4.length - 1;
    while (left <= right) {
        const averageIndex = Math.floor((left + right) / 2);
        if (arr4[averageIndex] === target) {
            return averageIndex;
        }
        else if (arr4[averageIndex] < target) {
            left = averageIndex + 1;
        }
        else {
            right = averageIndex - 1;
        }
    }
    return -1;
}
/**
 * Сортування масиву імен
 * @param names масив рядків(імен)
 * @returns відсортований масив імен
 */
names.sort();
document.writeln(`Відсортований масив імен: ${names}<br>`);
/**
 * Пошук індексу імені "Olga"
 * @param names масив рядків(імен)
 * @returns індекс імені "Olga" або -1, якщо ім'я не знайдено
 */
let indexName = binarySearch(names, "Olga");
if (indexName !== -1) {
    document.writeln(`Ім'я "Olga" знайдено під індексом: ${indexName}`);
}
else {
    document.writeln(`Ім'я "Olga" не знайдено в масиві.`);
}
