class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class MonthError extends ValidationError {
  constructor(message) {
    super(message);
    this.name = "MonthError";
  }
}

class GradeError extends ValidationError {
  constructor(message) {
    super(message);
    this.name = "GradeError";
  }
}

function validateMonth(month) {
  if (month < 1 || month > 12) {
    throw new MonthError("Місяць має бути від 1 до 12");
  }

  const vacationMonths = [6, 7, 8];
  if (vacationMonths.includes(month)) {
    throw new MonthError("Це канікули, навчання немає!");
  }
  return true;
}

function validateGrade(grade) {
  if (grade < 1 || grade > 100) {
    throw new GradeError("Оцінка має бути від 1 до 100");
  }
  return true;
}

function canImproveGrade(month, grade) {
  const lastMonthsOfSemesters = [5, 12];

  if (grade < 60 && !lastMonthsOfSemesters.includes(month)) {
    return "Можна покращити оцінку";
  } else if (grade < 60 && lastMonthsOfSemesters.includes(month)) {
    return "Покращити оцінку вже не вийде, бо кінець семестру";
  } else {
    return "Оцінка і так хороша, не потрібно її покращувати";
  }
}

function mainErrorHandling() {
  try {
    const month = parseInt(prompt("Введіть номер місяця (1-12):"));
    const grade = parseInt(prompt("Введіть оцінку (1-100):"));

    validateMonth(month);
    validateGrade(grade);

    const result = canImproveGrade(month, grade);
    alert(result);
  } catch (error) {
    if (error instanceof ValidationError) {
      alert(`Помилка: ${error.message}`);
    } else {
    }
  }
}
mainErrorHandling();
