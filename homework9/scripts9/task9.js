// 9. Дано масив імен. Сформувати масив з перших літер цих імен.

if (confirm("Почати виведення?")) {
  let names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Alina"];
  let firstLetters = names.map((name) => name.charAt(0));
  document.write("Масив з перших літер імен: " + firstLetters);
}
