const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let enableDraw = false;
const canvasOffsetLeft = canvas.offsetLeft
const canvasOffsetTop = canvas.offsetTop
canvas.width = 541;
canvas.height = 471;
canvas.addEventListener("mousemove", (event) => {
  if (enableDraw === true) {
    ctx.lineTo(event.pageX - canvasOffsetLeft, event.pageY - canvasOffsetTop);
    ctx.stroke();
  }
})

canvas.addEventListener("mousedown", () => {
  enableDraw = true;
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(event.pageX - canvasOffsetLeft, event.pageY - canvasOffsetTop);
})

window.addEventListener("mouseup", () => {
  enableDraw = false;
})
