const middleBtn = document.querySelector(".botton-middle");
const rightBtn = document.querySelector(".botton-right");
const leftBtn = document.querySelector(".botton-left");
const pixel = document.querySelector(".pixelart");
const jump = pixel.animate([
    { transform: "translate(-1.85px, 14.5px) scale(3.2, 2)", offset: ".2" },
    { transform: "translate(-1.85px, -60px) scale(3, 3)", offset: ".4" },
    { transform: "translate(-1.85px, 14.5px) scale(3.2, 2)", offset: ".6" },
    { transform: "translate(-1.85px, 14px) scale(3.2, 2)", offset: ".65" },
    { transform: "translate(0%, -10px) scale(3, 3)", offset: ".8" },
], 1100);

middleBtn.addEventListener('click', (elem) => {
    jump.play();
});

leftBtn.addEventListener('click', (elem) => {
    jump.play();
});

rightBtn.addEventListener('click', (elem) => {
    jump.play();
});