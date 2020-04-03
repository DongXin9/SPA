$(function() {
    colorView.init($(".mvc-view1")),
    sizeView.init($(".mvc-view2")),
    controller.init($(".mvc-view3")),
    controller.on(function(e) {
        mvcData.set(e),
        localStorage.setItem("value", e)
    }),
    mvcData.on(colorView.onColorChange),
    mvcData.on(sizeView.onSizeChange),
    $(window).resize(colorView.resize),
    $(window).resize(sizeView.resize);
    var e = localStorage.getItem("value");
    null !== e && (mvcData.set(e),
    controller.setValue(e))
});

