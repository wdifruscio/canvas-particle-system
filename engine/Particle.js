let Particle = function(x, y, life, angle, speed, size, decay, color) {
  let angleInRad = angle * Math.PI / 180;
  this.size = size;
  this.decay = decay;
  this.position = {
    x: x,
    y: y
  };
  this.velocity = {
    x: speed * Math.cos(angleInRad),
    y: -speed * Math.sin(angleInRad)
  };

  this.life = life;
  color ? (this.opacity = color[3]) : (this.opacity = 0.7);

  this.update = dt => {
    this.life -= this.decay / 10;
    color
      ? (this.color = `rgba(${color[0]},${color[1]}, ${color[2]}, ${this
          .life} )`)
      : (this.color = `rgba(100,100,100, ${this.life})`);

    if (this.life > 0) {
      this.position.x += this.velocity.x * dt;
      this.position.y += this.velocity.y * dt;
    }
  };
};

export default Particle;
