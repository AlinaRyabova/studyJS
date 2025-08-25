// 5.Дано масив елементів. Знайти добуток додатних елементів

if (confirm("Почати виведення?")) {
  let array = [10, -2, 34, 47, -5, 67, -1, 89];
  let product = 1;
  let numPositive = false;

  for (let item of array) {
    if (item > 0) {
      product *= item;
      numPositive = true;
    }
  }

  if (numPositive) {
    document.write("Добуток додатних елементів: " + product);
  } else {
    document.write("У масиві немає додатних елементів.");
  }
}
