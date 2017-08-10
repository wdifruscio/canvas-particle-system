import Particle from "./engine/Particle";
import Emitter from "./engine/Emitter";

import { colorCircle, startingPoint } from "./engine/Helpers";

const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
const WINDOW_H = canvas.width;
const WINDOW_W = canvas.height;
const emitter = new Emitter();

const driver = () => {
  requestAnimationFrame(driver);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, WINDOW_W, WINDOW_H);
  emitter.update(ctx, 2);
};

canvas.onclick = function(e) {};

driver();
