// Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)

const n = 4;
const matrix = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => Math.floor(Math.random() * 9) + 1)
);
console.log(matrix);

// номери рядків від 0 до половини, стовпці від 0 до половини

const half = Math.floor(n / 2);

const sumTopLeft = matrix
  .slice(0, half)
  .map((row) => row.slice(0, half))
  .flat()
  .reduce((prevSum, el) => prevSum + el, 0);
console.log("Сума елементів у верхньому лівому куті: " + sumTopLeft);

// номери рядків від 0 до половини, стовпці від половини до кінця

const sumTopRight = matrix
  .slice(0, half)
  .map((row) => row.slice(half))
  .flat()
  .reduce((prevSum, el) => prevSum + el, 0);
console.log("Сума елементів у верхньому правому куті: " + sumTopRight);

// 3)номери рядків (від половини до кінця, стовпці від 0 до половини

const sumBottomLeft = matrix
  .slice(half)
  .map((row) => row.slice(0, half))
  .flat()
  .reduce((prevSum, el) => prevSum + el, 0);
console.log("Сума елементів у нижньому лівому куті: " + sumBottomLeft);

// 4) номери рядків від половини до кінця , стовпці від половини до кінця

const sumBottomRight = matrix
  .slice(half)
  .map((row) => row.slice(half))
  .flat()
  .reduce((prevSum, el) => prevSum + el, 0);
console.log("Сума елементів у нижньому правому куті: " + sumBottomRight);

// 5) Суму парних рядків

const sumEvenRows = matrix
  .filter((row, index) => index % 2 === 0)
  .flat()
  .reduce((prevSum, el) => prevSum + el, 0);
console.log("Сума парних рядків: " + sumEvenRows);

// 6) Суму непарних стовпців

const sumOddCols = matrix
  .map((row) => row.filter((el, index) => index % 2 === 1))
  .flat()
  .reduce((prevSum, el) => prevSum + el, 0);
console.log("Сума непарних стовпців: " + sumOddCols);

// 7) У парних рядках – непарні стовпці, у непарних – парні.

const evenRowsOddColumns = matrix
  .map((row, index) =>
    row.filter((el, i) => (i % 2 === 0 ? index % 2 === 1 : index % 2 === 0))
  )
  .flat()
  .reduce((prevSum, el) => prevSum + el, 0);
console.log(
  "Сума елементів у парних рядках – непарні стовпці, у непарних – парні: " +
    evenRowsOddColumns
);
