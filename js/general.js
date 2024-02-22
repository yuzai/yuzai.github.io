var list = document.getElementsByClassName('category-list-count');
for(var i=0;i<list.length;i++)
{
    list[i].innerHTML  = '('+list[i].innerHTML+')';
}

document.addEventListener('scroll',function(){
var head = document.getElementById('daohang');
  if(window.pageYOffset !== 0)
      head.style.opacity = 1;
  else {
      head.style.opacity = 0.4;
  }
})

document.getElementById('daohang').addEventListener('mouseover',function(){
var head = document.getElementById('daohang');
      head.style.opacity = 1;
})
document.getElementById('daohang').addEventListener('mouseout',function(){
var head = document.getElementById('daohang');
      head.style.opacity = 0.4;
})

document.addEventListener('scroll',function(){
if(window.pageYOffset >= 202 && window.innerWidth >=768 ){
  if($('#ab_ca').next().length==0){
  var fixed = "<div id='fix_fixed' style='height:"+$(window).height()+"px;'></div>"
  $('#ab_ca').parent().append(fixed);
  }
  var w = $('#ab_ca').parent().width();
  $('#ab_ca').addClass('about_fix');
  $('#ab_ca').css({'width':w});
}
else {
  if(window.innerWidth <768){
  if($('#fix_fixed')) 
  $('#fix_fixed').remove();}
  $('#ab_ca').removeClass('about_fix');
}
})



  sideslide_control();

function sideslide_control(){
  var w = $('#ab_ca').parent().outerWidth();
if(window.innerWidth >= 768)
{
  $('#ab_ca').removeClass('sideslide_control');
  $('#ab_ca').css({
    'left':'auto'
  });
}
else {
  // var w = $('#ab_ca').parent().width();
  $('#ab_ca').addClass('sideslide_control');
  $('#ab_ca').css({
    'left':-w
  });
}
}
$(window).resize(function(){
  sideslide_control();
})

$('#slide_aboutme').click(function(){
   if(window.innerWidth < 768)
   {
    if($('#ab_ca').hasClass('sideslide_control')){
      var w = $('#ab_ca').parent().outerWidth();
      // console.log(w);
      // $('#ab_ca').css({'width':w});
      if($('#ab_ca').css('left') == '0px')
         $('#ab_ca').animate({left:-w});
      else {
         $('#ab_ca').animate({left:0});
      }
    }
    }
   })
$('#ab_ca,body').click(function(){
  if(window.innerWidth < 768)
  {
   if($('#ab_ca').hasClass('sideslide_control')){
     var w = $('#ab_ca').parent().outerWidth();
     if($('#ab_ca').css('left') == '0px')
        $('#ab_ca').animate({left:-w},'slow');
   }
   }
})


$('#up').click(function(){
   $("html,body").animate({scrollTop:0}, 500);
});
