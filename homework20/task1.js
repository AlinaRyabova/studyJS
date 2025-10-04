const wordPairs = [
  { id: 1, ua: "сповнений надії", en: "hopeful" },
  //   { id: 2, ua: "безнадійний", en: "hopeless" },
  { id: 3, ua: "заохочувати, підбадьорювати", en: "encourage" },
  { id: 4, ua: "немає лиха без добра", en: "every cloud has a silver lining" },
  { id: 5, ua: "не падай духом", en: "chin up" },
  { id: 6, ua: "улюблений", en: "favorite" },
  //   { id: 7, ua: "подобається", en: "love" },
  { id: 8, ua: "надавати перевагу", en: "prefer" },
  { id: 9, ua: "божеволіти від", en: "be crazy about" },
  { id: 10, ua: "цікавитися", en: "be interested in" },
  { id: 11, ua: "бескінечне гортання негативних новин", en: "doomscrolling" },
  {
    id: 12,
    ua: "інформаційна бульбашка, де люди чують тільки свою думку",
    en: "echo chamber",
  },
  { id: 13, ua: "цифровий слід", en: "digital footprint" },
  { id: 14, ua: "природна здатність", en: "natural ability" },
  //   { id: 15, ua: "віра", en: "faith" },
];

const board = document.getElementById("board");
const status = document.getElementById("status");
const newBtn = document.getElementById("newBtn");
const showAllBtn = document.getElementById("showAll");

let cards = [];
let selected = [];
let matchedCount = 0;
let lock = false;

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

function buildDeck() {
  const deck = [];
  for (const p of wordPairs) {
    deck.push({ id: p.id, text: p.ua, lang: "ua" });
    deck.push({ id: p.id, text: p.en, lang: "en" });
  }
  return shuffle(deck);
}

function renderBoard() {
  board.innerHTML = "";
  const deck = buildDeck();
  matchedCount = 0;
  updateStatus();

  deck.forEach((cardData, idx) => {
    const el = document.createElement("div");
    el.className = "card";
    el.dataset.pairId = cardData.id;
    el.dataset.lang = cardData.lang;
    el.dataset.index = idx;
    el.textContent = cardData.text;
    board.appendChild(el);
  });

  cards = Array.from(document.querySelectorAll(".card"));
}

function updateStatus() {
  const total = wordPairs.length;
  status.textContent = `Пари знайдено: ${matchedCount} / ${total}`;
}

function clearSelectionVisuals() {
  selected.forEach((el) => {
    el.classList.remove("selected", "wrong");
  });
  selected = [];
}

board.addEventListener("click", (e) => {
  if (lock) return;
  const card = e.target.closest(".card");
  if (!card) return;
  if (card.classList.contains("matched")) return;
  if (selected.includes(card)) return;

  card.classList.add("selected");
  selected.push(card);

  if (selected.length === 2) {
    lock = true;
    const [first, second] = selected;
    const idFirst = first.dataset.pairId;
    const idSecond = second.dataset.pairId;

    if (idFirst === idSecond && first.dataset.lang !== second.dataset.lang) {
      setTimeout(() => {
        first.classList.add("matched");
        second.classList.add("matched");
        matchedCount++;
        updateStatus();
        selected = [];
        lock = false;

        if (matchedCount === wordPairs.length) {
          setTimeout(() => alert("Вітаю! Ви знайшли всі пари!"), 300);
        }
      }, 500);
    } else {
      first.classList.add("wrong");
      second.classList.add("wrong");
      setTimeout(() => {
        first.classList.remove("selected", "wrong");
        second.classList.remove("selected", "wrong");
        selected = [];
        lock = false;
      }, 1000);
    }
  }
});

newBtn.addEventListener("click", () => {
  renderBoard();
});

showAllBtn.addEventListener("click", () => {
  if (lock) return;
  cards.forEach((card) => card.classList.add("selected"));
  setTimeout(() => {
    cards.forEach((card) => card.classList.remove("selected"));
  }, 2000);
});
renderBoard();
