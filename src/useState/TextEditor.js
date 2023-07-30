import React, { useState } from "react";

const TextEditor = () => {
  // 1. useState ile state'i tanımlayın
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  // 2. Metni değiştikçe state'i güncelleyecek fonksiyonu tanımlayın
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // 3. Kalın ve italik düğmelerine tıkladıkça state'i güncelleyecek fonksiyonları tanımlayın
  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  return (
    <div>
      {/* 4. Metin girişi alanını ekleyin */}
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Metin girin..."
        style={{
          fontWeight: isBold ? "bold" : "normal",
          fontStyle: isItalic ? "italic" : "normal",
        }}
      />
      {/* 5. Kalın ve italik düğmelerini ekleyin */}
      <button onClick={handleBoldClick}>
        {isBold ? "Kalın Bırakma" : "Kalın Yap"}
      </button>
      <button onClick={handleItalicClick}>
        {isItalic ? "İtalik Bırakma" : "İtalik Yap"}
      </button>
    </div>
  );
};

export default TextEditor;
