// Задача 0,  Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

class SumClass {
  numbers: number[];

  constructor(numbers: number[]) {
    this.numbers = numbers;
  }
  sum(): number {
    return this.numbers.reduce((prevSum, num) => prevSum + num, 0);
  }
}

class ProductClass {
  numbers: number[];

  constructor(numbers: number[]) {
    this.numbers = numbers;
  }
  productBetween(min: number, max: number): number {
    return this.numbers
      .filter((num) => num > min && num < max)
      .reduce((prevSum, value) => prevSum * value, 1);
  }
}

const obj1 = new SumClass([1, 3, 5, 7, 9]);
const obj2 = new ProductClass([2, 4, 6, 8, 10]);

console.log(obj1.sum());
console.log(obj2.productBetween(1, 5));
console.log(obj1.sum.call(obj2));
console.log(obj2.productBetween.call(obj1, 1, 7));
console.log(obj2.productBetween.apply(obj1, [0, 6]));
console.log(obj1.sum.apply(obj2));
