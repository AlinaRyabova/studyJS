"use strict";
// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
/**
 * визначає, який буде рік через N місяців.
 * @param date дата у вигляді об'єкта
 * @param N кількість місяців
 * @returns рік через N місяців
 */
function yearAfterNMonths(date, N) {
    const totalMonths = date.month - 1 + N;
    const yearsToAdd = Math.floor(totalMonths / 12);
    return date.year + yearsToAdd;
}
const dateToday = { day: 14, month: 9, year: 2025 };
console.log(yearAfterNMonths(dateToday, 7));
