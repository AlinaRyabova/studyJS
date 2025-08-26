// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)

let prices = [1, 500, 1500, 2500, 800, 1200, 3000, 700, 4000, 600];
//       1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

// const pricesGreaterThan1000 = prices.filter((price) => price > 1000);
// document.write("Ціни більші за 1000 грн: " + pricesGreaterThan1000 + "<br>");

//       2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

// const numberGreaterThan1000 = prices
//   .map((price, index) => {
//     if (price > 1000) {
//       return index;
//     }
//   })
//   .filter((index) => index !== undefined);
// document.write(
//   "Номери цін більші за 1000 грн: " + numberGreaterThan1000 + "<br>"
// );

//       3)Сформувати список з тих цін, які більші за попереднє значення

// const pricesGreaterThanPrevious = prices.filter((price, index, arr) => {
//   return index > 0 && price > arr[index - 1];
// });
// document.write(
//   "Ціни більші за попереднє значення: " + pricesGreaterThanPrevious + "<br>"
// );

//       4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

// const maxPrice = Math.max(...prices);
// const pricesAsPercentageOfMax = prices.map((price) => (price / maxPrice) * 100);
// document.write(
//   "Ціни у відсотках стосовно максимального: " + pricesAsPercentageOfMax + "<br>"
// );

//       5)Підрахувати кількість змін цін

// const priceChanges = maxPrice.reduce((count, price, index, arr) => {
//   if (index > 0 && price !== arr[index - 1]) {
//     return count + 1;
//   }
//   return count;
// }, 0);
// document.write("Кількість змін цін: " + priceChanges + "<br>");

//       6)Визначити, чи є ціна, що менше 1000

// const priceLessThan1000 = prices.some((price) => price < 1000);
// document.write("Чи є ціна менше за 1000 грн: " + priceLessThan1000 + "<br>");

//       7)Визначати, чи усі ціни більше за 1000

// const allPricesGreaterThan1000 = prices.every((price) => price > 1000);
// document.write(
//   "Чи всі ціни більше за 1000 грн: " + allPricesGreaterThan1000 + "<br>"
// );

//       8)Підрахувати кількість цін, що більше за 1000

// const countPricesGreaterThan1000 = prices.filter((price) => price > 1000);
// document.write(
//   "Кількість цін, що більше за 1000 грн: " +
//     countPricesGreaterThan1000.length +
//     "<br>"
// );

//       9)Підрахувати суму цін, що більше за 1000

// const sumPricesGreaterThan1000 = prices
//   .filter((price) => price > 1000)
//   .reduce((sum, price) => sum + price, 0);
// document.write(
//   "Сума цін, що більше за 1000 грн: " + sumPricesGreaterThan1000 + "<br>"
// );

//       10)Знайти першу ціну, що більше за 1000
// const firstPriceGreaterThan1000 = prices.find((price) => price > 1000);
// document.write(
//   "Перша ціна, що більше за 1000 грн: " + firstPriceGreaterThan1000 + "<br>"
// );

//       11)Знайти індекс першої ціни, що більше за 1000

// const firstIndexGreaterThan1000 = prices.findIndex((price) => price > 1000);
// document.write(
//   "Індекс першої ціни, що більше за 1000 грн: " +
//     firstIndexGreaterThan1000 +
//     "<br>"
// );

//       12)Знайти останню ціну, що більше за 1000

// const lastPriceGreaterThan1000 = [...prices]
//   .reverse()
//   .find((price) => price > 1000);
// document.write(
//   "Остання ціна, що більше за 1000 грн: " + lastPriceGreaterThan1000 + "<br>"
// );

//       13)Знайти індекс останньої ціни, що більше за 1000

// const lastIndexGreaterThan1000 =
//   prices.length - 1 - [...prices].reverse().findIndex((price) => price > 1000);
// document.write(
//   "Індекс останньої ціни, що більше за 1000 грн: " +
//     lastIndexGreaterThan1000 +
//     "<br>"
// );
