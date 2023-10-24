  // スクロールイベントのリスナーを追加
    window.addEventListener('scroll', fadeInElements);

    function fadeInElements() {
      // fadeUpTrigger クラスを持つ要素を取得
      const elements = document.getElementsByClassName('fadeUpTrigger');

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementPosition = element.getBoundingClientRect().top;

        // 要素が画面内に入ったらフェードインのクラスを追加
        if (elementPosition < window.innerHeight) {
          element.classList.add('fadeUp');
        }
      }
    }

    // ページ読み込み時に一度実行して初期表示を設定
    fadeInElements();


// 要素を取得
const modalContainers = document.querySelectorAll('.js-modal');
const openButtons = document.querySelectorAll('.js-modal-open');
const closeButtons = document.querySelectorAll('.js-modal-close');

// 開くボタンをクリックして対応するモーダルを開く
openButtons.forEach(function (openButton) {
    openButton.addEventListener('click', function () {
        const modalId = openButton.getAttribute('data-modal-btn');
        const modal = document.querySelector(`[data-modal-cont="${modalId}"]`);
        modal.classList.add('is-active');
    });
});

// 閉じるボタンをクリックしてモーダルを閉じる
closeButtons.forEach(function (closeButton) {
    closeButton.addEventListener('click', function () {
        const modal = closeButton.closest('.js-modal');
        modal.classList.remove('is-active');
    });
});

// モーダルの外側をクリックしてモーダルを閉じる
modalContainers.forEach(function (modalContainer) {
    modalContainer.addEventListener('click', function (e) {
        if (e.target === modalContainer) {
            modalContainer.classList.remove('is-active');
        }
    });
});