const text = "1234567890abcdefghijklmnopqrstuvwxyz";
let captcha = "";
let randomCharIndex;

for (let i = 0; i < 5; i++) {
  randomCharIndex = Math.floor(Math.random() * text.length);
  // console.log(text[randomCharIndex]);

  captcha = captcha + text[randomCharIndex];
}

alert(`please enter the captcha : (${captcha})`);
