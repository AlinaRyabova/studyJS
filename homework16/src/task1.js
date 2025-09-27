"use strict";
//   	Піцерія
// Клас із полями #ingredients і #orders. Замовлення можливі, якщо є інгредієнти.Введення та виведення дати реалізувати за допомогою методу  toString.
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
var _Pizzeria_ingredients, _Pizzeria_orders;
class Pizzeria {
    constructor(ingredients) {
        _Pizzeria_ingredients.set(this, void 0);
        _Pizzeria_orders.set(this, void 0);
        __classPrivateFieldSet(this, _Pizzeria_ingredients, ingredients, "f");
        __classPrivateFieldSet(this, _Pizzeria_orders, [], "f");
    }
    get ingredients() {
        return __classPrivateFieldGet(this, _Pizzeria_ingredients, "f");
    }
    set ingredients(newIngredient) {
        __classPrivateFieldSet(this, _Pizzeria_ingredients, newIngredient, "f");
    }
    addOrder(order) {
        __classPrivateFieldGet(this, _Pizzeria_orders, "f").push(order);
    }
    get orders() {
        return __classPrivateFieldGet(this, _Pizzeria_orders, "f");
    }
    toString() {
        return `Інградієнти: ${__classPrivateFieldGet(this, _Pizzeria_ingredients, "f").join(", ")}\nЗамовлення:${__classPrivateFieldGet(this, _Pizzeria_orders, "f").join(", ")}`;
    }
}
_Pizzeria_ingredients = new WeakMap(), _Pizzeria_orders = new WeakMap();
const myPizzeria = new Pizzeria(["сир", "томат", "тісто"]);
console.log(myPizzeria.toString);
document.writeln(myPizzeria.toString() + "<br>");
myPizzeria.addOrder("Капрічозо");
myPizzeria.addOrder("Папероні");
console.log(myPizzeria.toString());
document.writeln(myPizzeria.toString() + "<br>");
