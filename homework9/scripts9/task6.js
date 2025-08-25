// 6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

if (confirm("Почати виведення?")) {
  let array = [10, -2, 34, 47, -5, 67, -1, 89];
  let firstElement = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstElement) {
      array[i] *= 2;
    }
  }

  document.write("Масив після обробки: " + array);
}
