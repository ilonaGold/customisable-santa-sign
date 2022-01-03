const textInput = document.getElementById("text-input");
const signText = document.getElementById("sign");

const color = document.getElementById("color");
const fontStyle = document.getElementById("font-style");
const option = document.getElementsByTagName("option");

let emojiOne = document.getElementById("emoji-1");
let emojiTwo = document.getElementById("emoji-2");
let emojiChoice = ["🎅", "️☃️", "🎄", "🎉", "🎁", "🔔", "🦌"];
let randomEmojiOne;
let randomEmojiTwo;


// Add a message:

function addMessage() {
    const message = textInput.value;
    if (message.length <= 25) {
        emojiOne = emojiChoice[randomEmojiOne];
        emojiTwo = emojiChoice[randomEmojiTwo];
        sign.textContent = `${emojiOne} ${message} ${emojiTwo}`;
    } else {
        alert("Your message shall not exceed 25 characters");
    }
}

textInput.addEventListener("keyup", addMessage);


// Change a message color:

color.addEventListener("change", (e) => {
  signText.style.color = e.target.value;
});


// Change a message font family:

fontStyle.addEventListener("change", () => {
  let index = fontStyle.selectedIndex;
  signText.style.fontFamily = option[index].value;
})


// Generate random emojis:

function generateRandomEmoji() {
   randomEmojiOne = Math.floor((Math.random() * 7) + 1);
   randomEmojiTwo = Math.floor((Math.random() * 7) + 1);
 }
 
generateRandomEmoji();

