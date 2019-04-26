import React, { useState } from "react";

const Toggle = () => {
  const [boolean, setBoolean] = useState(true);
  return (
    <div>
      <h2>{boolean ? "Hello" : "Goodbye"}</h2>
      <button onClick={() => setBoolean(!boolean)}>Toggle</button>
    </div>
  );
};

export default Toggle;
