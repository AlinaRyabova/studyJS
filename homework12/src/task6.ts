// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.

let names2 = ["Ivan", "Olga", "Petro", "Anna", "Sergiy"];

/**
 * Бінарний пошук за довжиною імені
 * @param arr5 масив рядків(імен)
 * @param targetLength довжина імені для пошуку
 * @returns повертає індекс знайденого елемента або -1, якщо елемент не знайдено
 */

function binarySearchByLength(arr5: string[], targetLength: number): number {
  let left = 0;
  let right = arr5.length - 1;

  while (left <= right) {
    const averageIndex = Math.floor((left + right) / 2);
    if (arr5[averageIndex].length === targetLength) {
      return averageIndex;
    } else if (arr5[averageIndex].length < targetLength) {
      left = averageIndex + 1;
    } else {
      right = averageIndex - 1;
    }
  }
  return -1;
}

/**
 * Сортування масиву імен за довжиною
 * @param names2 масив рядків(імен)
 * @returns відсортований масив імен за довжиною
 */

names2.sort((a, b) => a.length - b.length);
document.writeln(`Відсортований масив імен за довжиною: ${names2}<br>`);

/**
 * Пошук індексу імені довжиною 5 символів
 * @param names2 масив рядків(імен)
 * @returns індекс імені довжиною 5 символів або -1, якщо ім'я не знайдено
 */

let indexNameByLength = binarySearchByLength(names2, 5);
if (indexNameByLength !== -1) {
  document.writeln(
    `Ім'я довжиною 5 символів знайдено під індексом: ${indexNameByLength}`
  );
} else {
  document.writeln(`Ім'я довжиною 5 символів не знайдено в масиві.`);
}
