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

export const colorArrayToString = arr => {
  let str = "rgba(";
  str += arr[0] + ",";
  str += arr[1] + ",";
  str += arr[2] + ",";
  str += arr[3] + ")";
  return str;
};

export const hexToArray = hex => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let arr = [];
  arr[0] = parseInt(result[1], 16);
  arr[1] = parseInt(result[2], 16);
  arr[2] = parseInt(result[3], 16);
  return arr;
};
