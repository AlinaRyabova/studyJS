// Задача 2.  Дано масив імен спортсменів. Розробити програму для виведення усіх можливих результатів змагань (списки імен у відповідності до місць, які вони займуть).

const athletes: string[] = ["Іван", "Петро", "Сергій"];

/**
 * Генерує всі можливі комбінації масиву.
 * @param arr - масив імен спортсменів
 * @returns масив комбінацій
 */

function generateCombinations(arr: string[]): string[][] {
  if (arr.length === 0) return [[]];
  if (arr.length === 1) return [arr];

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const remainingCombinations = generateCombinations(remaining);

    for (const combination of remainingCombinations) {
      result.push([current, ...combination]);
    }
  }
  return result;
}

const combinations = generateCombinations(athletes);

document.writeln("<h2>Можливі результати змагань:</h2>");
combinations.forEach((combination, index) => {
  document.writeln(`<p>${index + 1}: ${combination.join(", ")}</p>`);
});
