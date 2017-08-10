import Particle from "./Particle";
import { colorCircle } from "./Helpers";

let Emitter = function(size, color) {
  //"constructor"
  this.particles = [];
  this.size = size || 250;
  this.color = color || "rgb(255,255,255)";
  this.particleSize = Math.random();

  for (var i = 0; i < this.size; i++) {
    var ang = Math.floor(Math.random() * 360);
    var speed = Math.random() * i;
    var particle = new Particle(250, 250, 1, ang, 2);
    this.particles.push(particle);
  }

  //update position of particle
  this.update = (ctx, dt) => {
    for (var i = 0; i < this.particles.length; i++) {
      var current = this.particles[i];
      current.update(dt);
      colorCircle(
        ctx,
        current.position.x,
        current.position.y,
        this.particleSize,
        this.color
      );
      if (current.life <= 0) {
        this.particles.splice(i, 1);
      }
    }
  };
  //draw particle
  this.draw = () => {};
};

export default Emitter;
