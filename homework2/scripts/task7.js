// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

const month = Math.floor(Math.random() * 12) + 1;
const day = Math.floor(Math.random() * 7);

const sum = month + day;
document.write(`<p>Випадковий місяць: ${month}</p>
<p>Випадковий день: ${day}</p>
<p>Сума місяця та дня: ${sum}</p>`);
