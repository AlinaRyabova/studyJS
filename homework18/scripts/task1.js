function calculate(a) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let res = 0;

  switch (a) {
    case "add":
      res = num1 + num2;
      break;
    case "subtract":
      res = num1 - num2;
      break;
    case "multiply":
      res = num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        res = num1 / num2;
        break;
      }
  }
  document.getElementById("result").value = res;
}
