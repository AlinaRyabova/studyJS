// Задача -2. Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.

if (confirm("Почати генерувати числа?")) {
  let evenNumbers = 0;
  let oddNumbers = 0;

  for (let number = 1; number <= 1000; number++) {
    const randomNumber = Math.floor(Math.random() * 1000);

    if (randomNumber % 2 === 0) {
      evenNumbers++;
    } else {
      oddNumbers++;
    }
  }

  if (evenNumbers > oddNumbers) {
    alert(`Парних чисел більше: ${evenNumbers} ніж непарних: ${oddNumbers}`);
  } else if (oddNumbers > evenNumbers) {
    alert(`Непарних чисел більше: ${oddNumbers} ніж парних: ${evenNumbers}`);
  } else {
    alert(`Однакова кількість парних і непарних чисел: ${evenNumbers}`);
  }
}
