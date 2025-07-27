// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

const number1 = parseFloat(prompt("Введіть перше дійсне число:"));
const number2 = parseFloat(prompt("Введіть друге дійсне число:"));

const sum = number1 + number2;
const product = number1 * number2;
const quotient = number1 / number2;

document.write(`
    <table>
    <tr>
    <th>Операція</th>
    <th>Результат</th>
    </tr>
    <tr>
    <td>Сума</td>
    <td>${sum}</td>
    </tr>
    <tr>
       <td>Добуток</td>
    <td>${product}</td>
    </tr>
    <tr>
       <td>Частка</td>
    <td>${quotient.toFixed(1)}</td>
    </tr>
    </table>`);
