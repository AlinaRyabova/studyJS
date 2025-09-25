"use strict";
// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)
class ArrayStats {
    static countPositives(arr) {
        let count = 0;
        for (const num of arr) {
            if (num > 0)
                count++;
        }
        return count;
    }
    static countNegatives(arr) {
        let count = 0;
        for (const num of arr) {
            if (num < 0)
                count++;
        }
        return count;
    }
    static countOccurrences(arr, target) {
        let count = 0;
        for (const num of arr) {
            if (num === target)
                count++;
        }
        return count;
    }
    constructor() { }
}
const numbers = [1, -2, 3, 4, -5, -2, 6, -2];
console.log("Кількість додатних чисел:", ArrayStats.countPositives(numbers));
console.log("Кількість від'ємних чисел:", ArrayStats.countNegatives(numbers));
console.log("Кількість входжень числа -2:", ArrayStats.countOccurrences(numbers, -2));
