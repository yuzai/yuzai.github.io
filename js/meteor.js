var meteor_x=[];
var meteor_y=[];
var meteor_r=[];
function meteorGenerator() {
    //x位置偏移，以免经过月亮
    var x_m = Math.random() * width + 800;
    var r_m = Math.random() * 300 + 500;
    meteor_x.push(x_m);
    meteor_r.push(r_m);
    meteor_y.push(0);
    //每隔随机时间，生成新流星
     setTimeout('meteorGenerator()', Math.random() * 2000)
}

va = -(4 + Math.random() * 4);
vb = -va;

function flow(i){
  if (meteor_x[i] < -meteor_r[i] || meteor_y[i] > height + meteor_r[i]) {
           return false;
       }
       meteor_x[i] += va;
       meteor_y[i] += vb;
       return true;
}

function draw_meteor(a,b,c) {
        //径向渐变，从流星头尾圆心，半径越大，透明度越高
   gra = ctx.createRadialGradient(a, b, 0, a, b, c)

    gra.addColorStop(0, 'rgba(230,237,17,1)')
    gra.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = gra
    ctx.beginPath()
    //流星头，二分之一圆
    ctx.arc(a, b, 1, Math.PI / 4, 5 * Math.PI / 4)
    //绘制流星尾，三角形
    ctx.lineTo(a + c, b - c)
    ctx.closePath()
    ctx.fill()
}
function control_meteor(){
  for(var i=0;i<meteor_x.length;i++){
    if(flow(i))
        draw_meteor(meteor_x[i],meteor_y[i],meteor_r[i]);
    else {
      meteor_x.splice(i,1);
      meteor_y.splice(i,1);
      meteor_r.splice(i,1);
    }
  }
}
