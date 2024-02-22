var x = new  Array(200);
var y = new  Array(200);
var r = new  Array(200);
function generate_stars(){
  ctx.fillStyle = 'white';
  for(var i = 0; i < 200; i++)
  {
    x[i] = Math.random() * width;
    y[i] = Math.random() * height;
    r[i] = Math.random() + 0.2;
    ctx.beginPath();
    ctx.arc(x[i], y[i], r[i], 0, 2 * Math.PI);
    ctx.fill();
  }
}
function stars_blink(){
  for(var i = 0; i < 200; i++){
  var sign = Math.random() > 0.5 ? 1 : -1;
  r[i] += sign * 0.2;
            if (r[i] < 0) {
                r[i] = -r[i];
            } else if (r[i] > 1) {
                r[i] -= 0.2;
            }
}
}
function draw_star(){
  for(var i = 0; i < 200; i++){
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x[i], y[i], r[i], 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath()
  }
}
