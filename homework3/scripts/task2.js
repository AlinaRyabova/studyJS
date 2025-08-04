// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

let priceProducts = parseFloat(prompt("Введіть ціну товару:", "9.99"));
let amountMoney = parseFloat(prompt("Введіть кількість грошей:", "8.00"));
const balanceMoney = amountMoney - priceProducts;

if (amountMoney < priceProducts) {
  document.write("На жаль, у вас недостатньо грошей для покупки товару.");
} else {
  if (balanceMoney > 4) {
    document.write(
      `Ви можете купити товар, залишок у Вас грошей: ${balanceMoney} грн., пропонуємо купити лотерею за 4 грн. `
    );
  } else {
    document.write(
      `Ви можете купити товар, залишок у Вас грошей: ${balanceMoney} грн.`
    );
  }
}
