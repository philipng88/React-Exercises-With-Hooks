import React, { useState } from "react";

const ChangeColor = () => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("Black");

  const onChange = event => {
    setInput(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    setInput("");
    setColor(input);
  };

  const onRandomSubmit = event => {
    event.preventDefault();
    setInput("");
    setColor(randomHexGenerator);
  };

  const randomHexGenerator = () => {
    const hexDigits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f"
    ];
    let red1 = Math.floor(Math.random() * hexDigits.length);
    let red2 = Math.floor(Math.random() * hexDigits.length);
    let redValue = hexDigits[red1] + hexDigits[red2];

    let blue1 = Math.floor(Math.random() * hexDigits.length);
    let blue2 = Math.floor(Math.random() * hexDigits.length);
    let blueValue = hexDigits[blue1] + hexDigits[blue2];

    let green1 = Math.floor(Math.random() * hexDigits.length);
    let green2 = Math.floor(Math.random() * hexDigits.length);
    let greenValue = hexDigits[green1] + hexDigits[green2];

    let randomHexColor = "#" + redValue + blueValue + greenValue;
    return randomHexColor;
  };

  return (
    <div>
      <h1 style={{ color: color }}>{color}</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Enter HTML color"
          type="text"
          value={input}
          onChange={onChange}
        />
        <button type="submit">Change Color</button>
      </form>
      <button onClick={onRandomSubmit}>Generate Random Color</button>
    </div>
  );
};

export default ChangeColor;
