$(function() {
    var n = $("#pwd"),
        o = $(".pwd-text"),
        e = $("#eye");
    /*n.on("input", function() {
        o.val(n.val())
    }),*/
    e.mouseover(function() {
        n.removeAttr('type','password');
        n.attr('type','text');
    }),
    e.mouseout(function() {
        n.removeAttr('type','text');
        n.attr('type','password')
    })
});

