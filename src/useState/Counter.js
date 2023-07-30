 import React, { useState } from "react";

 const Counter = () => {
   //! 1. useState ile state'i tanımlayın
   const [count, setCount] = useState(0);

   //! 2. Arttırma ve azaltma fonksiyonlarını tanımlayın
   const increaseCount = () => {
     setCount(count + 1);
   };

   const decreaseCount = () => {
     if (count > 0) {
       setCount(count - 1);
     }
   };

   return (
     <div>
       {/* 3. State'i ekranda gösterin */}
       <h1>Counter: {count}</h1>
       {/* 4. Arttırma ve azaltma butonlarını ekleyin */}
       <button onClick={increaseCount}>Arttır</button>
       <button onClick={decreaseCount}>Azalt</button>
     </div>
   );
 };

 export default Counter;
