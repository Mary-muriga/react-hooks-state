import React, { useState } from "react";

function Counter() {
  const [Count, setCount] = useState(0);

  function increment() {
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    console.log(Count)
  }
  return <button onClick={increment}>I have been clicked {Count} times</button>;
}

export default Counter;
