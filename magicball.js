const back = document.querySelector(".magicballback");
const front = document.querySelector(".magicballfront");

let displayed = "front";

front.addEventListener("click", () => {
  if (displayed === "front") {
    back.style.display = "block";
    front.style.display = "none";
    displayed = "back";
  }
});
back.addEventListener("click", () => {
  if (displayed === "back") {
    front.style.display = "block";
    back.style.display = "none";
    displayed = "front";
  }
});