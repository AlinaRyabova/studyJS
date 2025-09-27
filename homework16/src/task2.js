"use strict";
// Задача 2. Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.Введення та виведення дати реалізувати за допомогою методу  toString.
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TMoney_dollarAmount, _TMoney_dollarRate;
class TMoney {
    constructor(dollarAmount, dollarRate) {
        _TMoney_dollarAmount.set(this, void 0);
        _TMoney_dollarRate.set(this, void 0);
        __classPrivateFieldSet(this, _TMoney_dollarAmount, dollarAmount, "f");
        __classPrivateFieldSet(this, _TMoney_dollarRate, dollarRate, "f");
    }
    get dollarAmount() {
        return __classPrivateFieldGet(this, _TMoney_dollarAmount, "f");
    }
    set dollarAmount(value) {
        if (value < 0)
            throw new Error("Сума не може бути від'ємною");
        __classPrivateFieldSet(this, _TMoney_dollarAmount, value, "f");
    }
    get dollarRate() {
        return __classPrivateFieldGet(this, _TMoney_dollarRate, "f");
    }
    set dollarRate(value) {
        if (value <= 0)
            throw new Error("Курс повинен бути > 0");
        __classPrivateFieldSet(this, _TMoney_dollarRate, value, "f");
    }
    addAmountInUAN(amountInUAN) {
        __classPrivateFieldSet(this, _TMoney_dollarAmount, __classPrivateFieldGet(this, _TMoney_dollarAmount, "f") + amountInUAN / __classPrivateFieldGet(this, _TMoney_dollarRate, "f"), "f");
    }
    removeAmountInUAN(amountInUAN) {
        const amountInDollars = amountInUAN / __classPrivateFieldGet(this, _TMoney_dollarRate, "f");
        if (amountInDollars > __classPrivateFieldGet(this, _TMoney_dollarAmount, "f"))
            throw new Error("Недостатньо коштів");
        __classPrivateFieldSet(this, _TMoney_dollarAmount, __classPrivateFieldGet(this, _TMoney_dollarAmount, "f") - amountInDollars, "f");
    }
    findRateForPlus100UAN() {
        const currentUAN = __classPrivateFieldGet(this, _TMoney_dollarAmount, "f") * __classPrivateFieldGet(this, _TMoney_dollarRate, "f");
        const targetUAN = currentUAN + 100;
        return targetUAN / __classPrivateFieldGet(this, _TMoney_dollarAmount, "f");
    }
    toString() {
        return `Сума в доларах: ${__classPrivateFieldGet(this, _TMoney_dollarAmount, "f").toFixed(2)}, Курс долара: ${__classPrivateFieldGet(this, _TMoney_dollarRate, "f").toFixed(2)}`;
    }
}
_TMoney_dollarAmount = new WeakMap(), _TMoney_dollarRate = new WeakMap();
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
console.log(`Курс долара, при якому сума у гривнях збільшиться на 100: ${courseForPlus100UAN.toFixed(2)}`);
document.writeln(`Курс долара, при якому сума у гривнях збільшиться на 100: ${courseForPlus100UAN.toFixed(2)}`);
