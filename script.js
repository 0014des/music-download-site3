// カウントダウン
let counter = 10;
const counterElement = document.getElementById("counter");

const interval = setInterval(function(){
  counter--;
  counterElement.textContent = counter;

  if (counter <= 0) {
    clearInterval(interval);
    counterElement.textContent = "ダウンロード期限が終了しました。";
  }
},1000);
