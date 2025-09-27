document.addEventListener("DOMContentLoaded", () => {
  const wishes = [
    "Подорож у Синевір",
    "Новий ноутбук",
    "Курс з програмування",
    "Автомобіль",
    "Квитки у театр",
    "Абонемент у спортзал",
    "Книга з улюбленого жанру",
    "Майстер-клас з кулінарії",
    "Фотосесія на Говерлі",
    "Збирати горіхи",
  ];

  const wishesContainer = document.getElementById("wishesContainer");

  const randomIndex = wishes.sort(() => Math.random() - 0.5).slice(0, 3);

  randomIndex.forEach((wish) => {
    const div = document.createElement("div");
    div.className = "wish";
    div.textContent = wish;
    wishesContainer.appendChild(div);
  });
});
