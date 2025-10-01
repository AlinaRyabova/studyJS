const inputs = document.querySelectorAll("#inputs-container input");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    const value = Number(input.value);

    for (let i = index - 1; i >= 0; i--) {
      inputs[i].value = value - (index - i);
    }

    for (let i = index + 1; i < inputs.length; i++) {
      inputs[i].value = value + (i - index);
    }
  });
});
