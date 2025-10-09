// Задача 1. Виводити на екран скільки хвилин користувач вже на сайті

// const start = new Date();
// setInterval(() => {
//   const now = new Date();
//   const diffMinutes = Math.floor((now - start) / 1000 / 60);
//   document.writeln(`Ви на сайті ${diffMinutes} хвилин<br>`);
// }, 6000);

// Задача 2. Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває.

function isProcedureActive(startTimeStr) {
  const startTime = new Date(`${startTimeStr}:00`);
  const endTime = new Date(startTime.getTime() + 30 * 60 * 1000);
  const now = new Date(`${new Date().toTimeString().slice(0, 8)}`);

  return now < endTime ? "Процедура ще триває" : "Процедура завершилась";
}

console.log(isProcedureActive("14:30"));
// Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00)

const now = new Date();
const endOfWorkDay = new Date();
endOfWorkDay.setHours(17, 0, 0, 0);

const diffMseconds = endOfWorkDay - now;
if (diffMseconds > 0) {
  const hours = Math.floor(diffMseconds / 1000 / 60 / 60);
  const minutes = Math.floor((diffMseconds / 1000 / 60) % 60);
  console.log(`До кінця робочого дня залишилось ${hours} годин і ${minutes}`);
} else {
  console.log("Робочий день закінчився!");
}

// Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)

function isInCurrentWeek(date) {
  const now = new Date();
  const dayOfWeek = now.getDay() || 7;
  const monday = new Date(now);
  monday.setDate(now.getDate() - dayOfWeek + 1);
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  return date >= monday && date <= sunday;
}

console.log(isInCurrentWeek(new Date("2025-10-08")));
console.log(isInCurrentWeek(new Date("2025-11-01")));
// Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00).

const now2 = new Date();
const workStart = new Date();
workStart.setHours(8, 0, 0, 0);

if (now2 < workStart) {
  const diffMinutes = Math.floor((workStart - now2) / 1000 / 60);
  console.log(`До початку робочого дня залишилось ${diffMinutes} хвилин`);
} else {
  console.log("Добрий день! Робочий день вже почався.");
}
// Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.

const now3 = new Date();

console.log(
  "Час у Лондоні: " +
    now3.toLocaleString("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
);
console.log(
  "Час у Парижі:",
  now3.toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
);
console.log(
  "Час у Сіднеї: ",
  now3.toLocaleString("en-AU", {
    timeZone: "Australia/Sydney",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
);
// Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента

const students = [
  { name: "Іван", dob: "15.04.1995" },
  { name: "Марія", dob: "22.11.1993" },
  { name: "Петро", dob: "30.06.1994" },
];

function findOldestStudent(students) {
  return students.reduce((oldest, student) => {
    const d1 = new Date(student.dob.split(".").reverse().join("-"));
    const d2 = new Date(oldest.dob.split(".").reverse().join("-"));
    return d1 < d2 ? student : oldest;
  });
}

console.log(findOldestStudent(students));
// Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.

// let startTime = new Date();
// document.addEventListener(
//   "mousemove",
//   () => {
//     const mouseMoveTime = new Date();
//     const diffSeconds = Math.floor((mouseMoveTime - startTime) / 1000);
//     console.log(
//       `Ви рухнули мишкою через ${diffSeconds} секунд після заходу на сайт`
//     );
//   },
//   { once: true }
// );
// Задача  9. Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.

function isCheckLeave(startDateStr) {
  const start = new Date(startDateStr);
  // const end = new Date(start.getTime() + 200 * 24 * 60 * 60 * 1000);
  // const now = new Date();

  const end = new Date(start);
  end.setDate(end.getDate() + 200);

  if (now < start) return "Відпустка ще не почалась";
  if (now > end) return "Відпустка вже закінчилась";
  return "Відпустка триває";
}

console.log(isCheckLeave("2025-08-01"));
// Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.

function isYogurtFresh(year, month, day, daysValid) {
  const productionDate = new Date(year, month - 1, day);
  const expiryDate = new Date(productionDate);
  expiryDate.setDate(expiryDate.getDate() + daysValid);
  const now = new Date();
  return now <= expiryDate ? "Йогурт придатний" : "Йогурт не придатний";
}
console.log(isYogurtFresh(2025, 9, 29, 30));
