// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.

/**
 * @param arr Генерує масив з 30 випадкових цілих чисел від 0 до 99.
 */

let arr1: number[] = [];

for (let i = 0; i < 30; i++) {
  arr1.push(Math.floor(Math.random() * 100));
}

document.write("Початковий масив: " + arr1 + "<br>");

/**
 *
 * @param array масив чисел для змішування
 * @returns result відсортований масив та кількість обмінів
 */

function sortingByMixing(array1: number[]): {
  sortedArray: number[];
  swapCount: number;
} {
  let sortedArray = array1.slice();
  let swapCount = 0;
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    for (let i = left; i < right; i++) {
      if (sortedArray[i] > sortedArray[i + 1]) {
        [sortedArray[i], sortedArray[i + 1]] = [
          sortedArray[i + 1],
          sortedArray[i],
        ];
        swapCount++;
      }
    }
    right--;

    for (let i = right; i > left; i--) {
      if (sortedArray[i] < sortedArray[i - 1]) {
        [sortedArray[i], sortedArray[i - 1]] = [
          sortedArray[i - 1],
          sortedArray[i],
        ];
        swapCount++;
      }
    }
    left++;
  }
  return { sortedArray, swapCount };
}

let result1 = sortingByMixing(arr1);

document.write("Відсортований масив: " + result1.sortedArray + "<br>");
document.write("Кількість обмінів: " + result1.swapCount + "<br>");
