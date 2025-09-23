//   	Піцерія
// Клас із полями #ingredients і #orders. Замовлення можливі, якщо є інгредієнти.Введення та виведення дати реалізувати за допомогою методу  toString.

class Pizzeria {
  #ingredients: string[];
  #orders: string[];

  constructor(ingredients: string[]) {
    this.#ingredients = ingredients;
    this.#orders = [];
  }

  get ingredients() {
    return this.#ingredients;
  }

  set ingredients(newIngredient) {
    this.#ingredients = newIngredient;
  }

  addOrder(order: string) {
    this.#orders.push(order);
  }

  get orders() {
    return this.#orders;
  }

  toString() {
    return `Інградієнти: ${this.#ingredients.join(
      ", "
    )}\nЗамовлення:${this.#orders.join(", ")}`;
  }
}

const myPizzeria = new Pizzeria(["сир", "томат", "тісто"]);
console.log(myPizzeria.toString);
document.writeln(myPizzeria.toString() + "<br>");

myPizzeria.addOrder("Капрічозо");
myPizzeria.addOrder("Папероні");

console.log(myPizzeria.toString());
document.writeln(myPizzeria.toString() + "<br>");
