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
      head.style.opacity = 0.92;
  }
})

document.getElementById('daohang').addEventListener('mouseover',function(){
var head = document.getElementById('daohang');
      head.style.opacity = 1;
})
document.getElementById('daohang').addEventListener('mouseout',function(){
var head = document.getElementById('daohang');
      head.style.opacity = 0.92;
})

var sidebar = $('#ab_ca');
var sidebarParent = sidebar.parent();
var stickyPlaceholderId = 'fix_fixed';
var stickyOffsetTop = 70;
var stickyTriggerTop = 202;

function isMobileViewport(){
  return window.innerWidth < 768;
}

function removeStickyPlaceholder(){
  $('#' + stickyPlaceholderId).remove();
}

function clearDesktopSticky(){
  removeStickyPlaceholder();
  sidebar.removeClass('about_fix');
  sidebar.css({
    'top': '',
    'width': ''
  });
}

function applyDesktopSticky(){
  if(!sidebar.length || !sidebarParent.length){
    return;
  }

  if(isMobileViewport()){
    return;
  }

  if(window.pageYOffset < stickyTriggerTop){
    clearDesktopSticky();
    return;
  }

  var parentRect = sidebarParent[0].getBoundingClientRect();
  var left = parentRect.left + (window.pageXOffset || document.documentElement.scrollLeft || 0);
  var width = sidebarParent.outerWidth();
  var height = sidebar.outerHeight(true);
  var placeholder = $('#' + stickyPlaceholderId);

  if(!placeholder.length){
    sidebarParent.append("<div id='" + stickyPlaceholderId + "'></div>");
    placeholder = $('#' + stickyPlaceholderId);
  }

  placeholder.css('height', height + 'px');
  sidebar.addClass('about_fix');
  sidebar.css({
    'left': left + 'px',
    'top': stickyOffsetTop + 'px',
    'width': width + 'px'
  });
}

document.addEventListener('scroll', function(){
  if(!isMobileViewport()){
    applyDesktopSticky();
  }
});

function sideslide_control(){
  if(!sidebar.length || !sidebarParent.length){
    return;
  }

  var w = sidebarParent.outerWidth();
  clearDesktopSticky();

  if(!isMobileViewport()){
    sidebar.removeClass('sideslide_control');
    sidebar.css({
      'left': 'auto'
    });
    return;
  }

  sidebar.addClass('sideslide_control');
  sidebar.css({
    'left': -w
  });
}
$(window).resize(function(){
  sideslide_control();
  if(!isMobileViewport()){
    applyDesktopSticky();
  }
})

sideslide_control();
if(!isMobileViewport()){
  applyDesktopSticky();
}

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
