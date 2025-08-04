// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

let age;
let personStatus;

age = prompt("Введіть вік людини:", "2");

if (age >= 0 && age <= 6) {
  personStatus = "Дитиною у садочку";
} else if (age >= 7 && age <= 17) {
  personStatus = " Школярем";
} else if (age >= 17 && age <= 22) {
  personStatus = "Студентом";
} else if (age >= 23 && age <= 60) {
  personStatus = "Працівником";
} else if (age > 60) {
  personStatus = "Пенсіонером";
}

document.write(`Людина віком ${age} років є: ${personStatus}`);
