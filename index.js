import Particle from "./engine/Particle";
import Emitter from "./engine/Emitter";
import { colorCircle, startingPoint, hexToArray } from "./engine/Helpers";

const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
const WINDOW_H = canvas.width;
const WINDOW_W = canvas.height;
let emitter;
let togglePause = document.getElementById("pause");

const driver = () => {
  requestAnimationFrame(driver);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, WINDOW_W, WINDOW_H);
  if (emitter) {
    let updateSpeed = document.getElementById("speed").value;
    emitter.update(ctx, updateSpeed);
  }
};

canvas.onclick = function(e) {
  let num = document.getElementById("size").value;
  let particleSize = document.getElementById("particleSize").value;
  let colorArr = hexToArray(document.getElementById("color").value);
  colorArr[3] = document.getElementById("opacity").value;
  let infinite = document.getElementById("infinite").checked;
  console.log(infinite);
  emitter = new Emitter(num, particleSize, e.clientX, e.clientY, colorArr, {});
};

driver();
