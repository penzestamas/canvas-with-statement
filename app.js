var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var size = 50;
var positionX = 20;
var positionY = 15;

var paddingX = 20;
var paddingY = 15;

for (var i = 0; i < 15; i++) {
  if((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
    context.fillStyle = 'rgba(0,255,0,.5)';
  }
  else if ((i + 1) % 3 === 0) {
    context.fillStyle = 'rgba(0,0,255,.5)';
  }
  else if ((i + 1) % 5 === 0) {
    context.fillStyle = 'rgba(255,255,0,.5)';
  }
  else {
    context.fillStyle = 'rgba(0,0,0,.5)';
  }
  context.fillRect(positionX, positionY, size, size);
  positionX += paddingX;
  positionY += paddingY;
}