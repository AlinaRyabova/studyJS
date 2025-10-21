import { Header } from "../ui/header.js";
import { Footer } from "../ui/footer.js";

const header = new Header();
const footer = new Footer();

header.mount();
footer.mount();

const content = document.getElementById("content");
content.innerHTML = `
  <h1>Ласкаво просимо до Dog App 🐾</h1>
  <p>Цей простий додаток показує випадкові фото собак.</p>
  <p>Перейдіть на сторінку <a href="dogs.html">Собаки</a>, щоб побачити галерею.</p>
`;
