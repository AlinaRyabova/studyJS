const container = document.getElementById("lists-container");
const btn = document.getElementById("color-btn");

function createRandomList() {
  const ol = document.createElement("ol");
  const length = Math.floor(Math.random() * 10) + 1;

  for (let i = 0; i < length; i++) {
    const li = document.createElement("li");
    li.textContent = Math.floor(Math.random() * 100) + 1;
    ol.appendChild(li);
  }
  return ol;
}

for (let i = 0; i < 5; i++) {
  container.appendChild(createRandomList());
}

btn.addEventListener("click", () => {
  const lists = container.querySelectorAll("ol");

  lists.forEach((list) => {
    const length = list.children.length;
    if (length % 2 === 0) {
      list.style.backgroundColor = "lightgreen";
    } else {
      list.style.backgroundColor = "lightcoral";
    }
  });
});
