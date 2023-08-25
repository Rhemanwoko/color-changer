import { useState } from "react";
import "./App.css";

const colorArray = [
  "Chocolate",
  "Pink",
  "Red",
  "Blue",
  "Green",
  "Violet",
  "Indigo",
  "Orange",
  "Brown",
  "Yellow",
];

function App() {
  const [selectedColor, setSelectedColor] = useState("White"); // Initial background color

  const changeBackgroundColor = () => {
    const randomColor =
      colorArray[Math.floor(Math.random() * colorArray.length)];
    setSelectedColor(randomColor);
  };

  return (
    <>
      <div className="navbar">
        <h2>Color Flipper</h2>
        <div className="nav-btns">
          <a onClick={() => setColorMode("simple")}>Simple</a>
          <a onClick={() => setColorMode("hex")}>Hex</a>
        </div>
      </div>
      <div
        className="body"
        style={{ backgroundColor: selectedColor.toLowerCase() }}
      >
        <h2>Background Color: {selectedColor} </h2>
        <button className="change-btn" onClick={changeBackgroundColor}>
          Change Color
        </button>
      </div>
    </>
  );
}

export default App;
