// 6. Інвестор вклав  тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. Визначити за допомогою циклів суму, яку він одержить.

if (confirm("Почати виведення?")) {
  let principal = parseInt(
    prompt("Введіть суму, яку хочете інвестувати", "10000")
  );

  let years = parseInt(prompt("Введіть кількість років інвестування", "20"));
  let rate = 0.2;
  let taxRate = 0.05;

  for (let year = 1; year <= years; year++) {
    let interest = principal * rate;
    let tax = interest * taxRate;
    principal += interest - tax;
  }

  document.write(
    `Сума, яку отримає інвестор через ${years} років: ${principal.toFixed(
      2
    )} тис. грн`
  );
}
