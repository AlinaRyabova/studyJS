// Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

const name1 = prompt("Введіть назву першого товару:");
const price1 = parseFloat(prompt(`Введіть вартість ${name1} (грн):`));
const quantity1 = parseInt(prompt(`Введіть кількість ${name1}:`));

const name2 = prompt("Введіть назву другого товару:");
const price2 = parseFloat(prompt(`Введіть вартість ${name2} (грн):`));
const quantity2 = parseInt(prompt(`Введіть кількість ${name2}:`));

const name3 = prompt("Введіть назву третього товару:");
const price3 = parseFloat(prompt(`Введіть вартість ${name3} (грн):`));
const quantity3 = parseInt(prompt(`Введіть кількість ${name3}:`));

const totalCost1 = price1 * quantity1;
const totalCost2 = price2 * quantity2;
const totalCost3 = price3 * quantity3;
const totalCost = totalCost1 + totalCost2 + totalCost3;

document.write(`
    <h2>Чек</h2>
    <table>
        <tr>
            <th>Товар</th>
            <th>Кількість</th>
            <th>Вартість (грн)</th>
        </tr>
        <tr>
            <td>${name1}</td>
            <td>${quantity1}</td>
            <td>${totalCost1.toFixed(2)}</td>
        </tr>
        <tr>
            <td>${name2}</td>
            <td>${quantity2}</td>
            <td>${totalCost2.toFixed(2)}</td>
        </tr>
        <tr>
            <td>${name3}</td>
            <td>${quantity3}</td>
            <td>${totalCost3.toFixed(2)}</td>
        </tr>
        <tr>
            <th colspan="2">Загальна вартість</th>
            <th>${totalCost.toFixed(2)}</th>
        </tr>   
    </table>
    <p>Дякуємо за покупку!</p>
    <p>Передбачення на сьогодні: Бережіть себе!</p>`);
