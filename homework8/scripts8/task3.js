// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

if (confirm("Почати виведення?")) {
  let students = ["Іван", "Марія", "Петро", "Іван", "Олена", "Іван"];
  let nameToFind = "Іван";
  let count = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i] === nameToFind) {
      count++;
    }
  }
  document.write(`Ім'я "${nameToFind}" зустрічається ${count} разів.`);
}
