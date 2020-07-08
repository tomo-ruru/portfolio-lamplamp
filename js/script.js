$(function(){
  $(function(){
    $('.slider').slick({
      accessibility: false,
      autoplay: true,
      autoplaySpeed: 2500,
      dots: true,
      fade: true,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: true,
    });
  });

  $(".navi-icon").on("click", function(){
    // ハンバーガーメニューの位置を設定
    var rightVal = 0;
    if($(this).hasClass("open")) {
        // 位置を移動させメニューを開いた状態にする
        rightVal = -300;
        $(this).css("color","#FFFFFF");
        // メニューを開いたら次回クリック時は閉じた状態になるよう設定
        $(this).removeClass("open");
      } else {
        // メニューを開いたら次回クリック時は閉じた状態になるよう設定
        $(this).css("color","#585555");
        $(this).addClass("open");
    }

    $(".header-navi").stop().animate({
        right: rightVal
    }, 200);
  });
});