// 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

if (confirm("Почати виведення?")) {
  let numElements = parseInt(prompt("Введіть кількість елементів масиву:"));
  let half = Math.floor(numElements / 2);
  let array = new Array(numElements).fill(1, 0, half).fill(7, half);
  document.write(
    "Масив з " +
      numElements +
      " елементів, перша половина - 1, друга половина - 7: " +
      array
  );
}
