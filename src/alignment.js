import React, { useState } from "react";

const Alignment = () => {
  const [align, setAlign] = useState("");

  return (
    <div>
      <h1 style={{ textAlign: align }}>Align Me</h1>
      <div style={{ display: "flex", justifyContent: "Center" }}>
        <button onClick={() => setAlign("left")}>Left</button>
        <button onClick={() => setAlign("center")}>Center</button>
        <button onClick={() => setAlign("right")}>Right</button>
      </div>
    </div>
  );
};

export default Alignment;
