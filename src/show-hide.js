import React, { useState } from "react";

const ShowHide = () => {
  const [presence, setPresence] = useState(true);

  return (
    <div>
      <h1>{presence ? "Hello World" : ""}</h1>
      <button onClick={() => setPresence(!presence)}>Toggle</button>
    </div>
  );
};

export default ShowHide;
