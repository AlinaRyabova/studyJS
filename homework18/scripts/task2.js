function calculateAge() {
  const birthYear = parseInt(document.getElementById("birthYear").value, 10);
  const currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;

  document.getElementById("ageResult").value = age + " років";
}
