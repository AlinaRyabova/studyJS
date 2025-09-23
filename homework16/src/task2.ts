// Задача 2. Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.Введення та виведення дати реалізувати за допомогою методу  toString.

class TMoney {
  #dollarAmount: number;
  #dollarRate: number;

  constructor(dollarAmount: number, dollarRate: number) {
    this.#dollarAmount = dollarAmount;
    this.#dollarRate = dollarRate;
  }

  get dollarAmount() {
    return this.#dollarAmount;
  }

  set dollarAmount(value) {
    if (value < 0) throw new Error("Сума не може бути від'ємною");
    this.#dollarAmount = value;
  }

  get dollarRate() {
    return this.#dollarRate;
  }

  set dollarRate(value) {
    if (value <= 0) throw new Error("Курс повинен бути > 0");
    this.#dollarRate = value;
  }
  addAmountInUAN(amountInUAN: number) {
    this.#dollarAmount += amountInUAN / this.#dollarRate;
  }

  removeAmountInUAN(amountInUAN: number) {
    const amountInDollars = amountInUAN / this.#dollarRate;
    if (amountInDollars > this.#dollarAmount)
      throw new Error("Недостатньо коштів");
    this.#dollarAmount -= amountInDollars;
  }
  findRateForPlus100UAN() {
    const currentUAN = this.#dollarAmount * this.#dollarRate;
    const targetUAN = currentUAN + 100;
    return targetUAN / this.#dollarAmount;
  }
  toString() {
    return `Сума в доларах: ${this.#dollarAmount.toFixed(
      2
    )}, Курс долара: ${this.#dollarRate.toFixed(2)}`;
  }
}

const myMoney = new TMoney(100, 41.67);
console.log(myMoney.toString());
document.writeln(myMoney.toString() + "<br>");

myMoney.addAmountInUAN(1000);
console.log(myMoney.toString());
document.writeln(myMoney.toString() + "<br>");

myMoney.removeAmountInUAN(500);
console.log(myMoney.toString());
document.writeln(myMoney.toString() + "<br>");

const courseForPlus100UAN = myMoney.findRateForPlus100UAN();
console.log(
  `Курс долара, при якому сума у гривнях збільшиться на 100: ${courseForPlus100UAN.toFixed(
    2
  )}`
);
document.writeln(
  `Курс долара, при якому сума у гривнях збільшиться на 100: ${courseForPlus100UAN.toFixed(
    2
  )}`
);
