$(function(){
  window.onhashchange=function(){
    var $olock  = $('.main'),
        strHash = window.location.hash,
        color   = strHash.substring(3,strHash.length);
    $olock.css({
      'background-color':color
    })
  }
})
