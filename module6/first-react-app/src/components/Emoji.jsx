import { useState } from "react";

function Emoji() {
  const [emoji, setEmoji] = useState("😊");

  const handleSwitchEmoji = () => {
    let newEmoji = emoji === "😊" ? "😒" : "😊";
    setEmoji(newEmoji);
  };

  return (
    <div className="Emoji componentBox">
      Emoji: {emoji}
      <button onClick={handleSwitchEmoji}>Switch Emoji</button>
    </div>
  );
}

export default Emoji;
