// Задача 0. Вивести на екран 8 кнопок з написом “Hello”.

if (confirm("Вивести кнопки?"))
  for (let button = 1; button <= 8; button++) {
    document.write("<button>Hello</button> <br>");
  }
