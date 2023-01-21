import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    setProgress(event.target.value);
  };

  const handleReset = () => {
    setProgress(0);
  };

  return (
    <div>
      <progress
        value={progress}
        max="100"
        style={{ backgroundColor: getColor(progress) }}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleChange}
      />
      <button onClick={handleReset}>Reset</button>
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
