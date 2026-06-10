let minute = +prompt("دقیقه راوارد نمایید :");
let second = +prompt("ثانیه راوارد نمایید :");

let timer = setInterval(function () {
  if (second === -1) {
    minute--;
    second = 59;
  }
  if (minute === 0 && second === 0) {
    clearInterval(timer);
    alert("Game Over");
  }

  console.log(`Timer :${minute}:${second}`);
  second--;
}, 1000);
