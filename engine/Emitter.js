import Particle from "./Particle";
import { colorCircle, colorArrayToString } from "./Helpers";

let Emitter = function(size, particleSize, startX, startY, color, options) {
  //"constructor"
  this.particles = [];
  this.size = size || 100;
  this.color = color || [255, 255, 255, 1];
  this.particleSize = particleSize || Math.random();
  this.options = options;
  console.log(this.options);

  for (var i = 0; i < this.size; i++) {
    var ang = Math.floor(Math.random() * 360);
    var speed = Math.random();
    var particle = new Particle(
      startX,
      startY,
      this.options.duration,
      ang,
      speed
    );
    particle.color = this.color;
    particle.index = i;
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
    }
  };

  this.updateParticle = (particle, dt) => {
    particle.update(dt);
    particle.life -= Math.random() / 50;
    if (particle.life < 0) {
      if (options.infinite) {
        particle.life = options.duration;
        particle.position.x = startX;
        particle.position.y = startY;
      } else {
        this.particles.splice(particle.index, 1);
      }
    }

    // particle.color[3] = particle.life;
  };
  //draw particle
  this.draw = () => {};
};

export default Emitter;
