function draw_moon(){
  gradient = ctx.createRadialGradient(200, 200, 80, 200, 200, 800);
  //径向渐变
  gradient.addColorStop(0, 'rgb(255,255,255)');
  gradient.addColorStop(0.01, 'rgb(70,70,80)');
  gradient.addColorStop(0.2, 'rgb(40,40,50)');
  gradient.addColorStop(0.4, 'rgb(20,20,30)');
  gradient.addColorStop(1, 'rgb(0,0,10)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}
