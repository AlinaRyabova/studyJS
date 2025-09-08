"use strict";
// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
/**
 * Генерує масив з 30 випадкових цілих чисел від 0 до 99,
 *
 */
let arr = [];
for (let i = 0; i < 30; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
document.write("Початковий масив: " + arr + "<br>");
/**
 * Сортує масив бульбашковим методом та рахує кількість обмінів.
 * @param array масив чисел для сортування.
 * @returns об'єкт, що містить відсортований масив та кількість обмінів.
 */
function bubbleSortWithSwapCount(array) {
    let swapCount = 0;
    let n = array.length;
    let sortedArray = array.slice();
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                [sortedArray[j], sortedArray[j + 1]] = [
                    sortedArray[j + 1],
                    sortedArray[j],
                ];
                swapCount++;
            }
        }
    }
    return { sortedArray, swapCount };
}
let result = bubbleSortWithSwapCount(arr);
document.write("Відсортований масив: " + result.sortedArray + "<br>");
document.write("Кількість обмінів: " + result.swapCount + "<br>");
