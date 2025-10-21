import { Header } from "../ui/header.js";
import { Footer } from "../ui/footer.js";

const header = new Header();
const footer = new Footer();
header.mount();
footer.mount();

const content = document.getElementById("content");
content.innerHTML = `
  <h1>Про сайт</h1>
  <p>Мета цього мініпроєкту — продемонструвати модульний підхід: окремі класи для API, UI-компоненти та логіки сторінок.</p>
  <p>API: <a href="https://dog.ceo/dog-api/" target="_blank" rel="noopener">dog.ceo</a></p>
`;
