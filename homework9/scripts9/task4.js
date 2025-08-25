// 4.Дано масив елементів. Вивести на екран елементи, що більші за 100

if (confirm("Почати виведення?")) {
  let array = [50, 150, 200, 75, 300, 25, 400];
  for (let item of array) {
    if (item > 100) {
      document.write(item + " ");
    }
  }
}
