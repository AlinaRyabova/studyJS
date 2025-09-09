"use strict";
// Задача 7. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
/**
 * Тренажер додавання.
 * Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
 * @param num1 - перше число
 * @param num2 - друге число
 * @return результат додавання
 *
 */
function additionTrainer(num1, num2) {
    const intervalId = setInterval(() => {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        const userAnswer = prompt(`Скільки буде ${num1} + ${num2}?`);
        if (userAnswer === null) {
            alert(`Ви зупинили тренажер.`);
            clearInterval(intervalId);
            return;
        }
        if (parseInt(userAnswer) === num1 + num2) {
            alert("Правильно!");
        }
        else {
            alert(`Неправильно. Правильна відповідь: ${num1 + num2}`);
        }
    }, 10000);
}
additionTrainer();
