// Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :

const storeProfits = [
  [100, 200, 150, 300, 250, 400, 500],
  [120, 180, 220, 330, 210, 410, 520],
  [90, 160, 140, 310, 260, 390, 480],
];
console.log(storeProfits);
// 1) загальний прибуток кожного масиву за тиждень;

const totalProfitsPerStore = storeProfits.map((week) =>
  week.reduce((sum, dailyProfit) => sum + dailyProfit, 0)
);
console.log(
  "Загальний прибуток кожного магазину за тиждень: " + totalProfitsPerStore
);

// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);

const totalProfitsPerDay = storeProfits[0].map((_, dayIndex) =>
  storeProfits.reduce((sum, week) => sum + week[dayIndex], 0)
);
console.log("Загальний прибуток усіх магазинів по дням: " + totalProfitsPerDay);

// 3) загальний прибуток за робочі дні
const totalWeekdayProfits = storeProfits.map((week) =>
  week.slice(0, 5).reduce((sum, dailyProfit) => sum + dailyProfit, 0)
);
console.log(
  "Загальний прибуток кожного магазину за робочі дні: " + totalWeekdayProfits
);

// 4) загальний прибуток за вихідні дні
const totalWeekendProfits = storeProfits.map((week) =>
  week.slice(5).reduce((sum, dailyProfit) => sum + dailyProfit, 0)
);
console.log(
  "Загальний прибуток кожного магазину за вихідні дні: " + totalWeekendProfits
);

// 5) максимальний прибуток за середу
const maxWednesdayProfit = Math.max(...storeProfits.map((week) => week[2]));
console.log("Максимальний прибуток за середу: " + maxWednesdayProfit);

// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
const profitsGreaterThan200 = storeProfits
  .flat()
  .filter((profit) => profit > 200);
console.log(
  "Загальний список прибутків більших за 200: " + profitsGreaterThan200
);

// 7) відсортувати кожен тиждень за зростанням
const sortedWeeklyProfits = storeProfits.map((week) =>
  [...week].sort((a, b) => a - b)
);
console.log(
  "Відсортовані прибутки кожного магазину за тиждень: " + sortedWeeklyProfits
);

// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
const sortedByMaxProfit = [...storeProfits].sort(
  (a, b) => Math.max(...b) - Math.max(...a)
);
console.log(
  "Тижні відсортовані за спаданням максимального елементи у цьому тижні: " +
    sortedByMaxProfit
);

// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
const sortedByTotalProfit = [...storeProfits].sort((a, b) => {
  const sumA = a.reduce((sum, profit) => sum + profit, 0);
  const sumB = b.reduce((sum, profit) => sum + profit, 0);
  return sumB - sumA;
});
console.log(
  "Тижні відсортовані за спаданням суми елементів у рядку: " +
    sortedByTotalProfit
);
