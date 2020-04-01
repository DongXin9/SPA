/*function TimerButton(){
   var $btn = $('<input type="button" value="同意（6s）" disabled>'),
        cfg = {
          container:'body',
          num:6,
          title:'同意',
          enable:''
        },
        num,
        timer;
    $btn.css({
      height:'50px',
      width:'100px'
    })
  this.show = function(conf){
    $(conf.container).append($btn);
    $.extend(cfg,conf);
    
    $btn.val(cfg.title + '(' + cfg.num + 's)');

    timer = setInterval(function(){
      cfg.num--;
      if(cfg.num === 0){
        clearInterval(timer);
        $btn.val(cfg.title);
        $btn.removeAttr('disabled')
      }else{
        $btn.val(cfg.title+'('+cfg.num+'s)')  
      }
    },1000);
    $btn.click(cfg.onClick);

  }

}
*/
var $timerButton = (function(){

  /*var html = '<input class="timer-button" type="button" value="同意（6s）" disabled/>',
      $btn = $('<input type="button" value="同意（6s）" disabled>'),
      cfg = {
        container:'body',
        num:6,
        title:'同意',
        enable:''
      },
      num,
      timer;
  $btn.css({
    height:'50px',
    width:'100px'
  })*/
  function show(conf){
    var $btn = $('<input type="button" value="同意（6s）" disabled>'),
        cfg = {
          container:'body',
          num:6,
          title:'同意',
          enable:''
        },
        num,
        timer;
    $btn.css({
      height:'50px',
      width:'100px'
    })
    // 1.DOM draw
    //$(container).html(html);
    $(conf.container).append($btn);
    $.extend(cfg,conf);
    
    $btn.val(cfg.title + '(' + cfg.num + 's)');

    timer = setInterval(function(){
    cfg.num--;
    if(cfg.num === 0){
      clearInterval(timer);
      $btn.val(cfg.title);
      $btn.removeAttr('disabled')
    }else{
      $btn.val(cfg.title+'('+cfg.num+'s)')  
    }
    },1000);
    // 2.event 绑定
    /*$btn.click(function(){
      cfg.onClick()
    })*/
    $btn.click(cfg.onClick);
  }
  /*$btn.click(function(){
    cfg.onClick()
  })*/
  return {
    show: show
  };
}());
//不用 page load event
//封装成对象，有几种方案
//1.全局对象，简单对象自变量，不完全是面向对象的，不包括私有方法
//var timerBtn{
//   show: function()
//}
//2.工厂函数，一个函数返回值是一个简单对象
//var timerBtn = (function(){
//  return {
//    show:function(){}
//  }
//}())
//3.构造函数
//function timerBtn(){
//}
//var tb = new timerBtn();
