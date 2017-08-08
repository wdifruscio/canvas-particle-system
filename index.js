import Particle from "./engine/Particle";
import { colorCircle, startingPoint } from "./engine/Helpers";

let canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext("2d");
let particles = [];

for (var i = 0; i < 2000; i++) {
  var ang = Math.floor(Math.random() * 45) + 70;
  var speed = Math.random() * i;
  var size = Math.floor(Math.random() * 10);
  var decay = Math.random();
  let particle = new Particle(240, 240, 1, ang, speed, size, decay);
  particles.push(particle);
}

const WINDOW_H = 500;
const WINDOW_W = 500;

const driver = () => {
  requestAnimationFrame(driver);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, WINDOW_W, WINDOW_H);
  startingPoint(250, 250);

  for (var i = 0; i < particles.length; i++) {
    var current = particles[i];
    particles[i].update(0.02);
    colorCircle(
      current.position.x,
      current.position.y,
      current.size,
      current.color
    );
  }
};

driver();
