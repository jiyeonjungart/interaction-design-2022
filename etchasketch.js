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
// let coord = { x: 0, y: 0 };

// document.addEventListener("mousedown", start);
// document.addEventListener("mouseup", stop);
// window.addEventListener("resize", resize);

// resize();

// function resize() {
//   ctx.canvas.width = window.innerWidth;
//   ctx.canvas.height = window.innerHeight;
// }
// const ctxOffset = canvas.offset();
// function reposition(event) {
//   coord.x = event.clientX - canvas.offsetLeft;
//   coord.y = event.clientY - canvas.offsetTop;
// }
// function start(event) {
//   document.addEventListener("mousemove", draw);
//   reposition(event);
// }
// function stop() {
//   document.removeEventListener("mousemove", draw);
// }
// function draw(event) {
//   ctx.beginPath();
//   ctx.lineWidth = 5;
//   ctx.lineCap = "round";
//   ctx.strokeStyle = "#fffff";
//   ctx.moveTo(coord.x, coord.y);
//   reposition(event);
//   ctx.lineTo(coord.x, coord.y);
//   ctx.stroke();
// }
