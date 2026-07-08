
var list = document.getElementsByClassName('archive-list-count');
for(var i=0;i<list.length;i++)
{
    list[i].innerHTML  = ' ('+list[i].innerHTML+')';
}
var link = document.getElementsByClassName('toc-link');
for(var i=0;i<link.length;i++)
{
    var mao = /#.*/;
    link[i].onclick = function(){
      var target = document.getElementById(decodeURIComponent(this.href.match(mao)[0]).slice(1));
      if(!target) return;
      var temp = $(target);
      if(window.innerWidth >=768){
      var size = temp.css('font-size').split('px')[0];
      temp.animate({'font-size':size*1.5},1000);
      }
      temp.css({'color':'green'});
      $('html,body').animate({scrollTop:temp.offset().top-100},500);
      setTimeout(function(){
        temp.css({'color':'black'});
        if(window.innerWidth >= 768){
          temp.animate({'font-size':size},1000);
         }
        }
        ,window.innerWidth >= 768 ?1000:1500);
    }
}
function change_color(temp){
  temp.style.color = 'black';
}

function closeTocPanel(){
  $('#post-toc-panel').removeClass('is-open');
  $('#post-toc-toggle').removeClass('is-active');
}

$('#post-toc-toggle').click(function(e){
  e.stopPropagation();
  $('#post-toc-panel').toggleClass('is-open');
  $(this).toggleClass('is-active');
});

$('#post-toc-panel').click(function(e){
  e.stopPropagation();
});

$('#post-toc-panel .toc-link').click(function(){
  closeTocPanel();
});

$(document).click(function(){
  closeTocPanel();
});
// <div class="pagination">
//   <p><%- paginator({ total: Math.ceil(site.posts.length / config.per_page)}) %></p>
// </div>
