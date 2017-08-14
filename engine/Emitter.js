import Particle from "./Particle";
import { colorCircle, colorArrayToString } from "./Helpers";

let Emitter = function(size, particleSize, startX, startY, color) {
  //"constructor"
  this.particles = [];
  this.size = size || 100;
  this.color = color || [255, 255, 255, 1];
  this.particleSize = particleSize || Math.random();

  for (var i = 0; i < this.size; i++) {
    var ang = Math.floor(Math.random() * 360);
    var speed = Math.random();
    var particle = new Particle(startX, startY, 1, ang, speed);
    particle.color = this.color;
    this.particles.push(particle);
  }

  //update position of particle
  this.update = (ctx, dt) => {
    for (var i = 0; i < this.particles.length; i++) {
      var particle = this.particles[i];
      this.updateParticle(particle, dt);
      colorCircle(
        ctx,
        particle.position.x,
        particle.position.y,
        this.particleSize,
        colorArrayToString(particle.color)
      );
      if (particle.life <= 0) {
        this.particles.splice(i, 1);
      }
    }
  };

  this.updateParticle = (particle, dt) => {
    particle.update(dt);
    particle.life /= dt;
    particle.color[3] -= 0.0001;
  };
  //draw particle
  this.draw = () => {};
};

export default Emitter;
