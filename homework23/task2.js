// Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.

let ages = [17, 18, 16, 17, 18, 17, 19, 18, 17];

let ageCount = new Map();

for (let age of ages) {
  ageCount.set(age, (ageCount.get(age) || 0) + 1);
}

let maxAgeCount = Math.max(...ageCount.values());

console.log("Кількість кожного віку: ", ageCount);
console.log("Максимальна кількість повторень:", maxAgeCount);

// Задача 6.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.

let books = [
  { title: "JS для початківців", year: 2021, author: "Іваненко" },
  { title: "React у дії", year: 2022, author: "Петренко" },
  { title: "Node.js швидкий старт", year: 2023, author: "Іваненко" },
  { title: "Алгоритми", year: 2020, author: "Сидоренко" },
];
let authorCount = {};

for (let book of books) {
  authorCount[book.author] = (authorCount[book.author] || 0) + 1;
}
console.log(authorCount);
// Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.

let visitors = [
  "Аліна",
  "Олена",
  "Петро",
  "Василь",
  "Аліна",
  "Олена",
  "Василь",
  "Аліна",
  "Олена",
];
let visitCount = new Map();

for (let user of visitors) {
  visitCount.set(user, (visitCount.get(user) || 0) + 1);
}

console.log(visitCount);
// Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

let students = [
  { name: "Аліна", course: 1, faculty: "IT" },
  { name: "Олег", course: 2, faculty: "Design" },
  { name: "Марія", course: 1, faculty: "IT" },
  { name: "Іван", course: 3, faculty: "Economics" },
  { name: "Наталя", course: 2, faculty: "Design" },
];

let faculties = new Set(students.map((s) => s.faculty));

let courseCount = {};

for (let s of students) {
  courseCount[s.course] = (courseCount[s.course] || 0) + 1;
}
console.log("Кількість факультетів:", faculties.size);
console.log("Кількість студентів за курсами:", courseCount);
// Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// Заокруглити вверх значення та підрахувати кількість різних показів.
let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];

let tempCount = {};

for (let t of temperatures) {
  tempCount[t] = (tempCount[t] || 0) + 1;
}

let roundedTemps = temperatures.map((t) => Math.ceil(t));
let uniqueRounded = new Set(roundedTemps);

console.log("Кількість входжень:", tempCount);
console.log("Кількість різних заокруглених показів:", uniqueRounded.size);

// Задача 10 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.

let mathClub = ["Іра", "Аліна", "Олег", "Максим"];
let historyClub = ["Олег", "Марина", "Іра", "Богдан"];

let both = mathClub.filter((name) => historyClub.includes(name));

let all = new Set([...mathClub, ...historyClub]);

console.log("В обох гуртках:", both.length);
console.log("Xоча б в одному:", all.size);
