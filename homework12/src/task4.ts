// Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.

// Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.

let arr3: number[] = [3, 5, 1, 4, 2];
document.write("Початковий масив: " + arr3 + "<br>");

/** * Сортує масив бульбашкою з виведенням кожного кроку.
 * @param array масив чисел для сортування.
 * @returns відсортований масив.
 */

function bubbleSortWithSteps(array: number[]): number[] {
  let sortedArray = array.slice();
  let n = sortedArray.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        [sortedArray[j], sortedArray[j + 1]] = [
          sortedArray[j + 1],
          sortedArray[j],
        ];
        document.write("Поточний стан масиву: " + sortedArray + "<br>");
      }
    }
  }
  return sortedArray;
}

let result3 = bubbleSortWithSteps(arr3);
document.write("Відсортований масив: " + result3 + "<br>");
