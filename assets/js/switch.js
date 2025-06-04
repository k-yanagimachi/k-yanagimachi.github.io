$(document).ready(function () {
    // 初期状態：すべて非表示
    $('.accordion').hide();
    $('.tp-qa__form').hide();

    // 各qaリンクがクリックされたときの処理
    $('[href^="#qa"]').on('click', function (e) {
        e.preventDefault();

        // アクティブなリンクを切り替え
        $('.tp-qa__item').removeClass('is-active');
        $(this).addClass('is-active');

        // href="#qa01" → "01"
        let qaId = $(this).attr('href').replace('#qa', '');

        // ゼロ埋め対応（1桁の場合 "8" → "08" にする）
        if (qaId.length === 1) {
            qaId = '0' + qaId;
        }

        const accordionId = '#ac' + qaId;

        // すべてのアコーディオンを非表示にして、対象だけ表示
        $('.accordion').hide();
        $(accordionId).fadeIn();

        // qa08が押されたときだけ.tp-qa__formを表示
        if (qaId === '08') {
            $('.tp-qa__form').show();
        } else {
            $('.tp-qa__form').hide();
        }
    });
});
