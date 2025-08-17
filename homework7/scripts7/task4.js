// Задача 5. Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.
if (confirm("Почати виведення?")) {
  function cmToInches(cm) {
    return cm / 2.54;
  }

  function kgToPounds(kg) {
    return kg * 2.20462;
  }

  function kmToMiles(km) {
    return km / 1.60934;
  }

  let cm = parseFloat(prompt("Введіть довжину в сантиметрах:"));
  let kg = parseFloat(prompt("Введіть вагу в кілограмах:"));
  let km = parseFloat(prompt("Введіть відстань в кілометрах:"));

  document.write(
    `${cm} см = ${cmToInches(cm).toFixed(2)} дюймів<br>
     ${kg} кг = ${kgToPounds(kg).toFixed(2)} фунтів<br>
     ${km} км = ${kmToMiles(km).toFixed(2)} миль`
  );
}
