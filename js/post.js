
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

// 代码块复制按钮
$('.post-content pre').each(function(){
  $(this).append('<button type="button" class="code-copy-btn">复制</button>');
});
$(document).on('click', '.code-copy-btn', function(){
  var btn = $(this);
  var text = btn.parent().find('code').text();
  function done(){
    btn.text('已复制');
    setTimeout(function(){ btn.text('复制'); }, 1500);
  }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(done);
  } else {
    var ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    done();
  }
});

// 阅读进度条
var progressBar = $('<div class="reading-progress"></div>').appendTo('body');
function updateProgress(){
  var docH = document.documentElement.scrollHeight - window.innerHeight;
  var pct = docH > 0 ? (window.pageYOffset / docH) * 100 : 0;
  progressBar.css('width', pct + '%');
}
$(window).on('scroll resize', updateProgress);
updateProgress();

// 目录高亮当前章节
var tocLinks = $('.post-toc-panel .toc-link');
var tocHeadings = $('.post-content').find('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]');
function updateActiveToc(){
  if(!tocLinks.length || !tocHeadings.length) return;
  var line = $(window).scrollTop() + 120;
  var currentId = null;
  tocHeadings.each(function(){
    if($(this).offset().top <= line) currentId = this.id;
  });
  tocLinks.removeClass('is-active');
  if(currentId){
    tocLinks.filter(function(){
      return decodeURIComponent(this.hash || '').slice(1) === currentId;
    }).addClass('is-active');
  }
}
$(window).on('scroll', updateActiveToc);
updateActiveToc();
// <div class="pagination">
//   <p><%- paginator({ total: Math.ceil(site.posts.length / config.per_page)}) %></p>
// </div>
