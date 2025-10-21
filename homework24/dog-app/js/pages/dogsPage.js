import { Header } from "../ui/header.js";
import { Footer } from "../ui/footer.js";
import { DogAPI } from "../api.js";
import { DogCard } from "../ui/dogCard.js";

const header = new Header();
const footer = new Footer();
header.mount();
footer.mount();

const api = new DogAPI();
const content = document.getElementById("content");

function renderControls() {
  return `
    <div class="controls">
      <label>Кількість: 
        <select id="count">
          <option value="6">6</option>
          <option value="8" selected>8</option>
          <option value="12">12</option>
        </select>
      </label>
      <button id="refresh" class="btn">Оновити</button>
    </div>
  `;
}

async function loadAndRender(count = 8) {
  content.innerHTML =
    "<h1>Галерея собак</h1>" +
    renderControls() +
    '<div id="grid" class="dog-grid"></div>';
  const grid = document.getElementById("grid");
  try {
    const imgs = await api.getRandomImages(count);
    grid.innerHTML = imgs.map((url) => new DogCard(url).render()).join("");
  } catch (e) {
    grid.innerHTML = `<p style="color:red">Помилка завантаження: ${e.message}</p>`;
  }
}

content.addEventListener("click", async (e) => {
  if (e.target && e.target.id === "refresh") {
    const count = Number(document.getElementById("count").value);
    await loadAndRender(count);
  }
});

loadAndRender(8);
