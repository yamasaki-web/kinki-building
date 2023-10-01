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

