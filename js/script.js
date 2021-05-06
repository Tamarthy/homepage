console.log("Cześć");

let znika = document.querySelector(".znika");
let oKorfballu = document.querySelector(".oKorfballu");
znika.addEventListener("click", () => { oKorfballu.remove(); });
console.log(znika);

let changeBackground = document.querySelector(".changeBackground");
let background = document.querySelector(".background");
changeBackground.addEventListener("click", () => { background.classList.toggle("docBackground"); })
console.log("changeBackground");