// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.

type myDate = { day: number; month: number; year: number };

/**
 * визначає, який буде рік через N місяців.
 * @param date дата у вигляді об'єкта
 * @param N кількість місяців
 * @returns рік через N місяців
 */

function yearAfterNMonths(date: myDate, N: number): number {
  const totalMonths = date.month - 1 + N;

  const yearsToAdd = Math.floor(totalMonths / 12);

  return date.year + yearsToAdd;
}

const dateToday: myDate = { day: 14, month: 9, year: 2025 };
console.log(yearAfterNMonths(dateToday, 7));
