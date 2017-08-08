let Particle = function(x, y, life, angle, speed, size, decay) {
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
  this.opacity = 0.7;

  this.update = dt => {
    this.life -= this.decay / 10;
    this.color = `rgba(100,100,100, ${this.life})`;
    if (this.life > 0) {
      this.position.x += this.velocity.x * dt;
      this.position.y += this.velocity.y * dt;
    } else {
      this.life = life;
      this.position.x = x;
      this.position.y = y;
      this.opacity = 1;
    }
  };
};

export default Particle;
