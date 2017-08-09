import Particle from "./engine/Particle";
import { colorCircle, startingPoint } from "./engine/Helpers";

const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
const WINDOW_H = canvas.width;
const WINDOW_W = canvas.height;
const particles = [];

function createSystem(n, mousePosX, mousePosY) {
  for (var i = 0; i < n; i++) {
    var ang = Math.floor(Math.random() * 360);
    var speed = document.getElementById("speed").value * i || Math.random() * i;
    var size = document.getElementById("size").value || Math.random();
    var decay = Math.random();
    let particle = new Particle(
      mousePosX,
      mousePosY,
      0.9,
      ang,
      speed,
      size,
      decay,
      [190, 175, 177, 1]
    );
    particles.push(particle);
  }
}

const driver = () => {
  requestAnimationFrame(driver);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, WINDOW_W, WINDOW_H);
  // startingPoint(250, 250);

  for (var i = 0; i < particles.length; i++) {
    var current = particles[i];
    current.update(0.02);
    colorCircle(
      current.position.x,
      current.position.y,
      current.size,
      current.color
    );
    if (current.life <= 0) {
      particles.splice(i, 1);
    }
  }
};

window.onclick = function(e) {
  createSystem(500, e.clientX, e.clientY);
};

driver();
