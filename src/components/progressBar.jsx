import React, { useState } from "react";
import progressBar from "../style/progressBar.css";

const ProgressBar = () => {
  const [progress1, setProgress1] = useState(50);
  const [progress2, setProgress2] = useState(70);

  const handleChange = (event) => {
    setProgress1(event.target.value);
    setProgress2(event.target.value);
  };

  const handleReset = () => {
    setProgress1(0);
    setProgress2(0);
  };

  const handleAddFive = () => {
    setProgress1(progress1 + 5 > 100 ? 100 : progress1 + 5);
    setProgress2(progress2 + 5 > 100 ? 100 : progress2 + 5);
  };

  const handleAddTen = () => {
    setProgress1(progress1 + 10 > 100 ? 100 : progress1 + 10);
    setProgress2(progress2 + 10 > 100 ? 100 : progress2 + 10);
  };

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <div className="progress-bar1">
        <progress
          value={progress1}
          max="100"
          style={{ backgroundColor: getColor(progress1) }}
        />
      </div>
      <div className="progress-bar2">
        <progress
          value={progress2}
          max="100"
          style={{ backgroundColor: getColor(progress2) }}
        />
      </div>
      <div style={{ display: "grid", gap: 10 }}>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAddFive}>Add 5%</button>
        <button onClick={handleAddTen}>Add 10%</button>
      </div>
    </div>
  );
};

const getColor = (progress) => {
  if (progress < 20) {
    return "red";
  } else if (progress < 50) {
    return "orange";
  } else if (progress < 80) {
    return "yellow";
  } else {
    return "green";
  }
};

export default ProgressBar;
