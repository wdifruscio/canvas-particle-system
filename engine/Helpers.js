export const colorCircle = (ctx, centerX, centerY, radius, fillColor) => {
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  ctx.fill();
};

export const startingPoint = (x, y) => {
  ctx.fillStyle = "blue";
  ctx.fillRect(x - 10, y - 10, 20, 20);
};
