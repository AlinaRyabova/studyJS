// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.

/**
 * Генерує масив випадкових цілих чисел
 * @param size кількість елементів у масиві
 * @param maxValue максимальне значення
 * @returns масив випадкових чисел
 */

function generateRandomArray(size: number, maxValue: number): number[] {
  let arr2: number[] = [];
  for (let i = 0; i < size; i++) {
    arr2.push(Math.floor(Math.random() * maxValue));
  }
  return arr2;
}

let arr2: number[] = generateRandomArray(30, 100);
document.write("Початковий масив: " + arr2 + "<br>");

/**
 * Сортування включеннями з підрахунком обмінів.
 * @param array масив чисел для сортування
 * @returns відсортований масив і кількість обмінів
 */

function insertionSortWithSwapCount(array: number[]): {
  sortedArray: number[];
  swapCount: number;
} {
  let sortedArray = array.slice();
  let swapCount = 0;

  for (let i = 1; i < sortedArray.length; i++) {
    let j = i;
    while (j > 0 && sortedArray[j - 1] > sortedArray[j]) {
      [sortedArray[j - 1], sortedArray[j]] = [
        sortedArray[j],
        sortedArray[j - 1],
      ];
      swapCount++;
      j--;
    }
  }
  return { sortedArray, swapCount };
}

let result2 = insertionSortWithSwapCount(arr2);
document.write("Відсортований масив: " + result2.sortedArray + "<br>");
document.write("Кількість обмінів: " + result2.swapCount + "<br>");
