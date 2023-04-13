//logoの表示
$(window).on("load", function () {
  $("#splash_logo").delay(2200).fadeOut("slow"); //ロゴを2.2秒（2200ms）待機してからフェードアウト
  // $("#splash").delay(2500).fadeOut("slow"); //ローディング画面を2.5秒（2500ms）待機してからフェードアウト

  $("#splash")
    .delay(2500)
    .fadeOut(0, function () {
      //ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

      $("body").addClass("appear"); //フェードアウト後bodyにappearクラス付与
    });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $(".splashbg1").on("animationend", function () {
    //この中に動かしたいJSを記載
  });
});
