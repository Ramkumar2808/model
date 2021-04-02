// Theme Change
const root = document.documentElement;
const theme = document.getElementById("theme");
let currentColor = theme.value;

theme.addEventListener("change", () => {
  let newColor = theme.value;
  if (newColor != currentColor) {
    let bgColor = "white";
    let textColor = "black";
    let btn = "grey";

    let br = "16";

    currentColor = newColor;

    switch (newColor) {
      case "night":
        bgColor = "black";
        textColor = "white";
        br = "16rem";
        btn = "black";
        break;
      case "ocean":
        bgColor = "#214682";
        textColor = "#fefefe";
        btn = "#214682";
        break;
      case "fire":
        bgColor = "#f27c33";
        textColor = "#333";
        btn = "#f27c33";
        break;
    }
    root.style.setProperty("--bg", bgColor);
    root.style.setProperty("--text-color", textColor);
    root.style.setProperty("--btn", btn);
  }
});

// Random Quote

function genQuote() {
  var randNum = Math.floor(Math.random() * 7) + 1;
  document.getElementById("quote").innerHTML = quotes[randNum];
}

//quote array
var quotes = [
  '"Dude, suckin\' at something is the first step at being sorta good at something."<p class="name">-  Jake<em>(Adventure Time)</em></p>',
  '"Either I will find a way, or I will make one."<p class="name"> - Philip Sidney</p>',
  '"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."<p class="name">- Thomas A. Edison</p>',
  '"You are never too old to set another goal or to dream a new dream."<p class="name">- C.S Lewis</p>',
  '"If you can dream it, you can do it."<p class="name">- Walt Disney</p>',
  '"Never give up, for that is just the place and time that the tide will turn."<p class="name">- Harriet Beecher Stowe</p>',
  "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<p class='name'>- Muhammad Ali</p>",
  '"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them."<p class="name">- Bruce Lee</p>',
];
