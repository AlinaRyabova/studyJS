// Задача 2. Створити 10 елементів для введення цін продуктів

if (confirm("Створити елементи для введення цін продуктів?")) {
  document.write("<form>");

  for (let forms = 1; forms <= 10; forms++) {
    document.write(
      `<label>Ціна продукту ${forms}: <input type="number" name="price${forms}" placeholder="Введіть ціну"></label><br>`
    );
  }

  document.write("</form>");
}
