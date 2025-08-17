// Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

if (confirm("Почати виведення?")) {
  function categorizeAverageGrade(grades) {
    let sum = 0;
    let countTwo = 0;
    let countThree = 0;

    for (let i = 0; i < grades.length; i++) {
      let grade = grades[i];
      sum += grade;

      if (grade === 2) countTwo++;
      if (grade === 3) countThree++;
    }

    const average = sum / grades.length;
    let category;

    if (countTwo > 0) {
      category = "Двійочник";
    } else if (countThree > 0) {
      category = "Трійочник";
    } else if (average === 5) {
      category = "Відмінник";
    } else if (average >= 4) {
      category = "Хорошист";
    } else {
      category = "Невизначена категорія";
    }

    return { average, category };
  }

  let numberItems = parseInt(prompt("Скільки предметів?"));
  let grades = [];

  for (let i = 0; i < numberItems; i++) {
    let grade = parseInt(
      prompt("Введіть оцінку для предмета " + (i + 1) + ":")
    );
    grades.push(grade);
  }

  const result = categorizeAverageGrade(grades);

  document.write(
    `Середній бал: ${result.average.toFixed(2)}<br>Категорія: ${
      result.category
    }`
  );
}
