// --------------------------------------------------------------- //
//     footer呼び出し　　　　　　　　　　                    　　　   //
// --------------------------------------------------------------- //
document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabBlocks = document.querySelectorAll('.tab-block');
  const contentBlocks = document.querySelectorAll('.interactive-block');

  tabBlocks.forEach(block => {
    block.addEventListener('click', () => {
      const type = block.dataset.type;

      // タブの背景切り替え
      tabBlocks.forEach(b => b.classList.remove('active'));
      block.classList.add('active');

      // 下のブロック切り替え
      contentBlocks.forEach(content => {
        content.classList.toggle('active', content.dataset.type === type);
      });
    });
  });

  // キャプション画像切替
  document.querySelectorAll(".interactive-block").forEach(block => {
    const image = block.querySelector(".main-image");
    const captions = block.querySelectorAll(".caption-item");

    captions.forEach(caption => {
      caption.addEventListener("click", () => {
        captions.forEach(c => c.classList.remove("active"));
        caption.classList.add("active");
        image.src = "assets/img/" + caption.dataset.img;
      });
    });
  });
});




// --------------------------------------------------------------- //
//               料金とサービス 切り替え　　　　　　          　　　   //
// --------------------------------------------------------------- //
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tab-button");
  const cards = document.querySelectorAll(".plan-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const type = button.dataset.type;

      // タブ切り替え
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // カード表示切替
      cards.forEach(card => {
        if (card.dataset.type === type) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
});

// --------------------------------------------------------------- //
//               よくある質問　　　　　　　　　　　          　　　   //
// --------------------------------------------------------------- //
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".faq-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.style.zIndex = parseInt(entry.target.dataset.index) + 10;
      }
    });
  }, {
    threshold: 0.3,
  });

  cards.forEach(card => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".faq-card");

  // スクロール表示処理は省略（別スクリプトで制御中）

  // カードクリックで回答の開閉
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("open");
    });
  });
});

