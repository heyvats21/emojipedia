import React, { useState } from "react";
import "./styles.css";

const emojiLibrary = {
  "😀": "Grinning Face",
  "😄": "Grinning Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "🤣": "Rolling on the Floor Laughing",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😋": "Face Savoring Food",
  "🤗": "Hugging Face",
  "🤭": "Giggling Face",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🥳": "Partying Face",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "🥺": "Pleading Face",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😖": "Confounded Face",
  "🤓": "Nerd Face"
};

const emojis = Object.keys(emojiLibrary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function handleUserInput(event) {
    var userInput = event.target.value;
    if (userInput in emojiLibrary) {
      setEmojiMeaning(emojiLibrary[userInput]);
    } else {
      setEmojiMeaning("Emoji not present in our library :(");
    }
  }

  function emojiClickHandler(emoji) {
    setEmojiMeaning(emojiLibrary[emoji]);
  }

  return (
    <div className="App">
      <h1>emojipedia</h1>
      <input
        style={{
          width: "337px",
          padding: "0.25rem",
          border: "1rem",
          borderRadius: "0.4rem",
          borderColor: "grey"
        }}
        placeholder=" click on an emoji or paste one here to know the meaning"
        onChange={handleUserInput}
      />
      <h4>{emojiMeaning}</h4>
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0.5rem 0" }}>
        {emojis.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
