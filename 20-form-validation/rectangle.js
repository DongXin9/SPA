$(function(){
  console.log('hello');
  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btncal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  /*calc button click event*/
  $btncal.click(function(){
    // validata
    //if error return;
    if(!validata('#width')||!validata('#height')) return;
    //get value
    var w = $width.val(),
        h = $height.val();
    var p = 2 * w + 2 * h,
        a = w * h;

    $perimeter.val(p);
    $area.val(a);
  })
  //1.event keypress
  //2.event argument get key value,e.key and e.target.value
  //3.ilegal key filter,e.preventDefault
  //4.合法字符还要考虑出现的位置，例如：., e, E, -
  $width.keypress(function(e){
    if(.test(e.key)){
      e.preventDefault();
        return;
    }
    //合法字符
    //允许出现在非科学计数法的数字末尾
    //允许出现在非科学计数法的数字中间
    //
    //不允许出现在非科学计数法的数字前面
    //不允许出现在空文本中
    //不允许出现在负号后面
    //不允许出现在科学计数法（e和E）数字的末尾
    //不允许出现在科学计数法的前面
    //不允许出现在科学计数法的中间
    var pos = e.target.selectionStart,
        con = e.target.value;
  if(e.key === 'e'){
    if(con.indexOf('e')!== -1){
      e.preventDefault();
      return;
    }
  }
  })



  //get value
  //caculate
  //output
  //字段级校验
  $width.focusout(function(){
    //if(!validata()) select this;
    if(!validata('#width')) $width.select();
  });
  $height.focusout(function(){
    //if(!validata()) select this;
    if(!validata('#height')) $height.select();
  });

  //集中校验
  function validata(field){
    // get DOM error message
    var $data = $(field),
        $msg = $(field + '-validation-message');
        
    // validata null
      if($data.val() === ''){
        $msg.html('不能为空');
        $data.select();
        return false;
      }
    // validata number
     if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
        $msg.html('必须是数值');
        $data.select();
        return false;
      }

    // validate > 0
   if(Number($data.val()) < 0){
        $msg.html('大于0');
        $data.select();
        return false;
      }

      // prompt error message
      // retrun false
     $msg.html(''); 
    return true;
  }
})

