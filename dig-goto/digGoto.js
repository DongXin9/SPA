var $digGoto = (function(){
  //div-mark-full-screen遮罩
  //div-dialog-box对话框
  // div-title
  //  p-转到指定行
  //  span-close-btn
  // div-main
  //  label-行号
  //  br
  //  input-text
  //  br
  //  input-button-转到
  //  input-button-取消
  //$digGoto
  var html = '' 
    + '<div class="notepad-dig-goto">'
        + '<div class="dialogbox">'
          + '<div class="titlebar">'
            + '<p class="title">转到指定行</p>'
            + '<span class="close-btn">X</span>'
          + '</div>'
          + '<div class="main">'
            + '<label for="">行号(L):</label>'
            + '<br>'
            + '<input class="txt-line-num" type="text" autofpcus>'
            + '<br>'
            + '<input class="btn-goto" type="button" value="转到">'
            + '<input class="btn-cancel" type="button" value="取消">'
          + '</div>'
        + '</div>'
      + '</div>',
    $dig = $(html),
    cfg = {
        container:'body' 
    };
  var $close = $dig.find('.close-btn'),
      $cancel = $dig.find('.btn-cancel'),
      $btngo = $dig.find('.btn-goto'),
      $txt = $dig.find('.txt-line-num');
  function clo(){$dig.remove()};
  function show(conf){
    // 1.DOM draw
    $(conf.container).append($dig);
    $.extend(cfg,conf); 
    // 2.event 绑定
    //$dig.click(cfg.onClick);
    $dig.draggable();
    $close.click(clo);
    $cancel.click(clo); 
    $btngo.click(function(){
      console.log('转到'+$txt.val()+'行');
      clo();
    });
  }
  return {
    show: show
  };
}());
