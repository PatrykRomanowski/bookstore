import React, { useState } from "react";

const Test2Component = () => {
  const [test1, setTest1] = useState(0);

  const counter = () => {
    setTest1(test1 + 1);
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
  };

  return (
    <div>
      <div>{test1}</div>
      <button style={buttonStyle} onClick={counter}>
        Click me!
      </button>
    </div>
  );
};

export default Test2Component;
