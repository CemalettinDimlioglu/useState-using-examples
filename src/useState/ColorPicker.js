import React, { useState } from "react";

const ColorPicker = () => {
  // 1. useState ile state'i tanımlayın
  const [color, setColor] = useState("#FFFFFF");

  // 2. Renk değiştikçe state'i güncelleyecek fonksiyonu tanımlayın
  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      {/* 3. Renk seçiciyi ekleyin */}
      <input type="color" value={color} onChange={handleChange} />
      {/* 4. Seçilen rengi gösteren bir kutu oluşturun */}
      <div
        style={{
          backgroundColor: color,
          width: "100px",
          height: "100px",
          margin: "20px auto",
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;
