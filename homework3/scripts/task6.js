// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

let dayNumber;
let dayName;

dayNumber = parseInt(prompt("Введіть номер дня тижня (1-7): ", "1"));

switch (dayNumber) {
  case 1:
    dayName = "Понеділок";
    break;
  case 2:
    dayName = "Вівторок";
    break;
  case 3:
    dayName = "Середа";
    break;
  case 4:
    dayName = "Четвер";
    break;
  case 5:
    dayName = "П'ятниця";
    break;
  case 6:
    dayName = "Субота";
    break;
  case 7:
    dayName = "Неділя";
    break;
  default:
    dayName = "Некоректний номер дня тижня";
    break;
}
document.write(`День тижня номер: ${dayNumber} - це ${dayName}`);
