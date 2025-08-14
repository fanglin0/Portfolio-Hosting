// document.addEventListener("DOMContentLoaded", () => {
//   const phrases = [
//     "working on a new project",
//     "writing my book",
//     "making art",
//     "being a student"
//   ];

//   const luckySpan = document.getElementById("lucky");

//   luckySpan.addEventListener("click", () => {
//     let next = phrases[Math.floor(Math.random() * phrases.length)];
//     while (next === luckySpan.textContent) {
//       next = phrases[Math.floor(Math.random() * phrases.length)];
//     }
//     luckySpan.textContent = next;
//   });
// });