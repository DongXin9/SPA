$(function(){
  var $btn = $('input'),
      i = 6,
      timer;
timer = setInterval(function(){
  i--;
  if(i === 0){
    clearInterval(timer);
    $btn.val('同意');
    $btn.removeAttr('disables')
  }else{
    $btn.val('同意（'+i+'s)')
  }
},1000);
  $btn.click(function(){
    alert('^')
  })
})
