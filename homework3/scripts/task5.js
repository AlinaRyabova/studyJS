// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

let nameDriverCategory;
let nameVehicle;

nameDriverCategory = prompt("Введіть категорію водія( A, B, C):", "A");

switch (nameDriverCategory) {
  case "A":
    nameVehicle = "Мотоцикл";
    break;
  case "B":
    nameVehicle = "Легковий автомобіль";
    break;
  case "C":
    nameVehicle = "Вантажний автомобіль";
    break;
  default:
    nameVehicle = "Некоректна категорія водія";
    break;
}
document.write(
  `Водій з категорією ${nameDriverCategory} може керувати: ${nameVehicle}`
);
