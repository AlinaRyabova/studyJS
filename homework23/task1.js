// Задача 1. Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)

class PhoneNumber {
  constructor(number) {
    this.number = String(number);
  }

  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      if (this.number.startsWith("050") || this.number.startsWith("066")) {
        return `MTC (${this.number})`;
      } else if (
        this.number.startsWith("096") ||
        this.number.startsWith("097") ||
        this.number.startsWith("067")
      ) {
        return `Kyivstar (${this.number})`;
      } else if (
        this.number.startsWith("073") ||
        this.number.startsWith("063")
      ) {
        return `Lifecell (${this.number})`;
      } else {
        return `Невідомий оператор (${this.number})`;
      }
    }
    return this.number;
  }
  toString() {
    return this[Symbol.toPrimitive]("string");
  }
}

const a = new PhoneNumber("0671234567");
console.log(String(a));
console.log("" + a);
console.log(a.toString());
// Задача 2. Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getTotal() {
    return this.price * this.quantity;
  }
}

class Shop {
  constructor(products = []) {
    this.products = products;
  }
  [Symbol.iterator]() {
    let index = 0;
    const items = this.products;

    return {
      next() {
        if (index < items.length) {
          const product = items[index++];
          return {
            value: `${product.name} - ${product.getTotal()} грн`,
            done: false,
          };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const shop = new Shop([
  new Product("Горіхи", 50, 4),
  new Product("Яблука", 30, 7),
  new Product("Груші", 40, 3),
]);

for (const item of shop) {
  console.log(item);
}
// Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

function* evenNumberGenerator(count) {
  if (!Number.isInteger(count) || count < 0) {
    throw new Error("count має бути невід'ємним цілим числом");
  }

  let generated = 0;

  while (generated < count) {
    const candidate = Math.floor(Math.random() * 1000);
    if (candidate % 2 === 0) {
      yield candidate;
      generated++;
    }
  }
}
for (const n of evenNumberGenerator(5)) {
  console.log(n);
}
const arr = [...evenNumberGenerator(7)];
console.log(arr);
