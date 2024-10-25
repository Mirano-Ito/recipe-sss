document.addEventListener("DOMContentLoaded", () => {//htmlを読み込むと実行されるイベントリスナー
    const playButton = document.getElementById("play-button"); //スタートボタンをplayButtonに格納
    const timerDisplay = document.getElementById("timer-display"); //カウント部分をtimerDisplayに格納
    let countdown; //countdownの変数を宣言、setIntervalの関数のidが格納される
    
    //starttimerここから
    function startTimer(duration) {
      let time = duration;//ここでtime変数が定義され、duratiomn=初期値。
      const minutes = Math.floor(time / 60);//timeを/60、小数点以下を切り捨てて(math.floor)分に
      const seconds = time % 60;//timeの%(あまり)を秒に
      timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      //timerdisplayに新しい文字列を代入してタイマーの表示を更新する。分:0(一桁の場合のみ)+秒数の３構成
  
      countdown = setInterval(() => {//setInterval:指定された間隔で関数を繰り返し実行してくれるメソッド
        time--;//１ずつ減少
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  //カウントダウンが０になったif
        if (time <= 0) {//0以下になったら...
          clearInterval(countdown);//intervalをクリアしないとマイナスに突入したりリソースの無駄使い。
          timerDisplay.textContent = "00:00";
          alert("COMPLEAT!");
        }
      }, 1000);//1000ミリ秒(=1秒)
    }//starttimerここまで
  
    playButton.addEventListener("click", () => {//クリックした時にアクションを起こすよ
      clearInterval(countdown); // Reset the timer if it's already running
      startTimer(10); // タイマーの開始値
    });
  });
  