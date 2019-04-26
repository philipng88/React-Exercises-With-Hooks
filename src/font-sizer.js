import React, { useState } from "react";

const FontSizer = () => {
  const [count, setCount] = useState(20);

  return (
    <div>
      <h1 style={{ fontSize: `${count}px` }}>{count}px</h1>
      <button onClick={() => setCount(count + 1)}>Grow</button>
      <button onClick={() => setCount(count - 1)}>Shrink</button>
    </div>
  );
};

export default FontSizer;
