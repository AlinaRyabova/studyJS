// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

let monthNumber;
let season;

monthNumber = parseInt(prompt("Введіть номер місяця (1-12): ", "1"));

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    season = "Зима";
    break;
  case 3:
  case 4:
  case 5:
    season = "Весна";
    break;
  case 6:
  case 7:
  case 8:
    season = "Літо";
    break;
  case 9:
  case 10:
  case 11:
    season = "Осінь";
    break;
  default:
    season = "Некоректний номер місяця";
    break;
}

document.write(
  `Місяць номер: ${monthNumber} відноситься до пори року: ${season}`
);
