import React, { useState, useCallback } from "react";


const Child = React.memo(({ onClick }) => {
    console.log("👶 Child rendered");
    return <button onClick={onClick}>کلیک کن</button>;
  });
  
  function Parent() {
    const [count, setCount] = useState(0);
  
    const handleClick = useCallback(() => {
      console.log("Button clicked!");
    }, []); // بدون وابستگی
  
    return (
      <div>
        <Child onClick={handleClick} />
        <button onClick={() => setCount(count + 1)}>افزایش</button>
      </div>
    );
  }
  export default Parent;