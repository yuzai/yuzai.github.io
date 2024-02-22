function get_width(){
  width = window.innerWidth;
  height = window.innerHeight;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
}

function draw_all(){
  ctx.clearRect(0, 0, width, height);
  draw_moon();
  stars_blink();
  draw_star();
  control_meteor();
}

get_width();
generate_stars();
meteorGenerator();

//
setInterval(draw_all, 10);

// setTimeout(function(){
//   location.href = "archives";
// },5000);
