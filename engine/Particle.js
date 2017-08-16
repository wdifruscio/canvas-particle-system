let Particle = function(x, y, life, angle, speed) {
  let angleInRad = angle * Math.PI / 180;
  this.life = life;

  this.position = {
    x: x,
    y: y
  };

  this.velocity = {
    x: speed * Math.cos(angleInRad),
    y: -speed * Math.sin(angleInRad)
  };

  this.update = dt => {
    if (this.life > 0) {
      this.position.x += this.velocity.x * dt;
      this.position.y += this.velocity.y * dt;
    }
  };
};

export default Particle;
