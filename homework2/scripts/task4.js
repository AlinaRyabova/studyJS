// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
const centimeters = parseInt(prompt("Введіть довжину в сантиметрах:"));
const meters = centimeters / 100;
const kilometers = centimeters / 100000;

document.write(`
    <p>Довжина в сантиметрах: ${centimeters} см</p>
    <p>Довжина в метрах: ${meters} м</p>
    <p>Довжина в кілометрах: ${kilometers} км</p>`);
