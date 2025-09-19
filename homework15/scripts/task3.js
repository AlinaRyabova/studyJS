"use strict";
// Задача 5. Розробити клас «Керівник танців»
// Поля
// Масив імен хлопців
// Масив імен дівчат
// Методи
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців
class DanceManager {
    constructor(boysNames, girlsNames) {
        this.boysNames = boysNames;
        this.girlsNames = girlsNames;
    }
    getRandomBoy() {
        const randomIndex = Math.floor(Math.random() * this.boysNames.length);
        return this.boysNames[randomIndex];
    }
    getRandomGirl() {
        const randomIndex = Math.floor(Math.random() * this.girlsNames.length);
        return this.girlsNames[randomIndex];
    }
    getDancePair() {
        const boy = this.getRandomBoy();
        const girl = this.getRandomGirl();
        return `Нова пара для танців: ${boy} та  ${girl}`;
    }
    run() {
        this.intervalId = setInterval(() => {
            console.log(this.getDancePair());
        }, 5000);
    }
    stop() {
        clearInterval(this.intervalId);
        console.log("Зупинка виведення танцювальних пар");
    }
}
const boys = ["Андрій", "Дмитро", "Сергій", "Олексій", "Іван"];
const girls = ["Марія", "Олена", "Наталія", "Катерина", "Анна"];
const danceManager = new DanceManager(boys, girls);
console.log(danceManager.run());
setTimeout(() => {
    danceManager.stop();
}, 20000);
