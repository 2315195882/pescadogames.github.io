window.onload = function () {
    setTimeout(function () {
        document.getElementById('loading').classList.add('loadinghiding');

        setTimeout(function () {

            document.getElementById('loading').classList.add('loadinghide');
            document.getElementById('analyticsinfo').classList.add('show')

        }, 100);
    }, 1000);
};

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger').each(function () { //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top + 500; //要素より、250px下
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('show');
            // 画面内に入ったらshowというクラス名を追記
        } else {
            $(this).removeClass('show');
            // 画面外に出たらshowというクラス名を外す
        }
    });

}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

function CloseAnalyticsDialog() {
    document.getElementById('analyticsinfo').classList.remove('show')
}