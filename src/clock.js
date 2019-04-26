import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    let interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;
