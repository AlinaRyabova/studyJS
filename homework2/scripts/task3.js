// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості)
const vatRate = 0.05;
const unitPrice = parseFloat(prompt("Введіть вартість одиниці товару:"));
const quantity = parseInt(prompt("Введіть кількість товару:"));

const totalCost = unitPrice * quantity;
const vat = totalCost * vatRate;

document.write(
  `Загальна вартість: ${totalCost.toFixed(2)} грн <br>ПДВ (5%): ${vat.toFixed(
    2
  )} грн`
);
