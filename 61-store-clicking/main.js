$(function(){
  var $otn = $('#main>input'),
      num = window.localStorage.getItem('num')||0;
  $otn.val('被按了'+num+'次');
  $otn.click(function(){
    num++;
    window.localStorage.setItem('num',num);
    $otn.val('被按了'+num+'次');
  })
})
