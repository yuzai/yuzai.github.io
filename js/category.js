var button1 = document.getElementById('but1');
var button2 = document.getElementById('but2');
button1.onclick = function(){
   document.getElementById('archive1').style.display= '';
   document.getElementById('archive2').style.display= 'none'
}
button2.onclick = function(){
  document.getElementById('archive1').style.display= 'none';
  document.getElementById('archive2').style.display= ''
}
