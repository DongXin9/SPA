requirejs.config({
  'paths': {
    'jquery': '//code.jquery.com/jquery-2.1.4.min'
  }
});
require(['jquery'],function($){
    var $btnadd = $('#add');
    $btnadd.click(function(){
      require(['timer-button'],function(TimerButton){
      var tb = new TimerButton();
      tb.show({
        num:6,
        title:'发送验证码',
        container:'#main',
        onClick:function(){
          alert('点击了定时器按钮');
        }
        });
      });
    })
})

