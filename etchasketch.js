const canvas = document.getElementById("canvas");
canvas.style.cursor = "url('data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>✍️</text></svg>') 16 0, pointer"
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
