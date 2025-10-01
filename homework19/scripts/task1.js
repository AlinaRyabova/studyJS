const component = document.getElementById("container");

container.addEventListener("click", (event) => {
  const target = event.target.closest(".item");

  if (!target || !container.contains(target)) return;

  let activeItem = target.nextElementSibling;

  while (activeItem) {
    activeItem.classList.add("red");
    activeItem = activeItem.nextElementSibling;
  }
});
