 import React, { useState } from "react";

 const TextInput = () => {
   // 1. useState ile state'i tanımlayın
   const [text, setText] = useState("");

   // 2. Metin değiştikçe state'i güncelleyecek fonksiyonu tanımlayın
   const handleChange = (event) => {
     setText(event.target.value);
   };

   return (
     <div>
       {/* 3. Metin girişi alanını ekleyin */}
       <input
         type="text"
         value={text}
         onChange={handleChange}
         placeholder="Metin girin..."
       />
       {/* 4. Girilen metni ekranda gösterin */}
       <p>Girilen Metin: {text}</p>
     </div>
   );
 };

 export default TextInput;
