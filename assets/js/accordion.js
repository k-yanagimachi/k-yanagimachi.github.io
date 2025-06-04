$('.accordion-title').on('click', function () {
    var $this = $(this);
    var $content = $this.next('.accordion-content');
    var isOpen = $content.is(':visible');

    // すべて閉じる
    $('.accordion-content').slideUp();
    $('.accordion-icon').text('+');

    // もし今閉じていたなら開く（＝開きっぱなしにする）
    if (!isOpen) {
      $content.slideDown();
      $this.find('.accordion-icon').text('-');
    }
  });