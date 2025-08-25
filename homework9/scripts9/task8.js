// 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»
if (confirm("Почати виведення?")) {
  let carNumbers = [
    "AB1234CD",
    "BC5678EF",
    "AC9101GH",
    "DE2345IJ",
    "AF6789KL",
    "GH3456MN",
  ];
  let filteredNumbers = carNumbers.filter((number) => number.startsWith("A"));
  document.write(
    "Масив номерів авто, що починаються на 'А': " + filteredNumbers.join(", ")
  );
}
