/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.querySelector("canvas.project-canvas");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "white";
ctx.font = "3rem \"Concert One\", sans-serif";
ctx.fillText("I didn't make it yet.", 100, 100, 1000);