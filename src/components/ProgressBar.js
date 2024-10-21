import React, { useState, useEffect } from "react";


const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 10, 100);  // Increase by 20% each time
      });
    }, 500);  // Decrease time to 250 milliseconds
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id="barOuter" 
      style={styles.barOuter}
      >
        <div
          id="barInner"
          style={{
            ...styles.barInner,
            width: `${progress}%`,
          }}
        >
          {progress}%
        </div>
      </div>
      <span>{progress}%</span>
    </div>
  );
};

const styles = {
  barOuter: {
    width: "25%",
    height: "30px",
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",
    overflow: "hidden",
    margin: "20px 0",
  },
  barInner: {
    height: "100%",
    backgroundColor: "#4caf50",
    textAlign: "center",
    lineHeight: "30px",
    color: "white",
    transition: "width 1s linear", // Smooth transition
  },
};



export default ProgressBar;
