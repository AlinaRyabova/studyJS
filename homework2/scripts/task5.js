// Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

const totalSeconds = parseInt(
  prompt("Введіть кількість секунд, що пройшла від початку доби:")
);

const hours = Math.floor(totalSeconds / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);

document.write(`
    <p>Кількість секунд, що пройшла від початку доби: ${totalSeconds}</p>
    <p>Кількість годин: ${hours}</p>
    <p>Кількість хвилин: ${minutes}</p>`);
