import { createContext, useState } from "react";

export const EmojiContext = ({ children }) => {
  const [emoji, setEmoji] = useState("😊");

  const changeEmoji = () => {
    const emojis = ["😊", "😎", "🤔", "😢", "😂"];
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  };

  return (
    <Context.Provider value={{ emoji, changeEmoji }}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext();
