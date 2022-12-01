import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const getRandomColor = () => "#" + Math.random().toString(16).slice(2, 8);

  const [colorTriangle, setColorTriangle] = useState(getRandomColor());
  const [colorCircle, setColorCircle] = useState(getRandomColor());
  const [colorSquare, setColorSquare] = useState(getRandomColor());

  const [sizeTriangle, setSizeTriangle] = useState("");
  const [sizeCircle, setSizeCircle] = useState("");
  const [sizeSquare, setSizeSquare] = useState("10");

  useEffect(() => {
    setSizeTriangle(getRandomSize());
    setSizeCircle(getRandomSize());
    setSizeSquare(getRandomSize());
  }, []);

  if (sizeTriangle === sizeCircle && sizeTriangle === sizeSquare) {
    alert(`The three figures have the same size`);
  }

  if (colorTriangle === colorCircle && colorTriangle === colorSquare) {
    alert(`The three figures have the same color`);
  }

  const styles = { width: 0, height: 0 };

  const getRandomSize = () => {
    return `${Math.floor(Math.random() * 100)}`;
  };

  return (
    <div className="App">
      <h4>
        <strong>Exercise useState & useEffect .</strong>
      </h4>
      <div className="triangle">
        <label htmlFor="triangle-size">Triangle size</label>
        <input
          type="number"
          name="triangle-size"
          style={{ width: 42 }}
          value={sizeTriangle}
          onChange={(e) => setSizeTriangle(e.target.value)}
        />
        <br></br>
        <label htmlFor="triangle-color">Triangle color</label>
        <input
          type="color"
          name="triangle-color"
          style={{ width: 40 }}
          value={colorTriangle}
          onChange={(e) => setColorTriangle(e.target.value)}
        />
        <figure
          className="triangle-shape"
          style={{
            ...styles,
            color: `${colorTriangle}`,
            borderLeft: `${sizeTriangle}/2px solid ${colorTriangle}`,
            borderRight: `${sizeTriangle}/2px solid ${colorTriangle}`,
            borderBottom: `${sizeTriangle}px solid ${colorTriangle}`,
          }}
        ></figure>
      </div>
      <br></br>
      <br></br>
      <div className="circle">
        <label htmlFor="circle-size">Circle size</label>
        <input
          type="number"
          name="circle-size"
          style={{ width: 42 }}
          value={sizeCircle}
          onChange={(e) => setSizeCircle(e.target.value)}
        />
        <br></br>
        <label htmlFor="circle-color">Circle color</label>
        <input
          type="color"
          name="circle-color"
          style={{ width: 40 }}
          value={colorCircle}
          onChange={(e) => setColorCircle(e.target.value)}
        />
        <figure
          style={{
            backgroundColor: colorCircle,
            width: `${sizeCircle}px`,
            height: `${sizeCircle}px`,
            borderRadius: `${sizeCircle}px`,
          }}
        />
      </div>
      <br></br>
      <br></br>
      <div className="square">
        <label htmlFor="square-size">Square size</label>
        <input
          type="number"
          name="square-size"
          style={{ width: 42 }}
          value={sizeSquare}
          onChange={(e) => setSizeSquare(e.target.value)}
        />
        <br></br>
        <label htmlFor="square-color">Square color</label>
        <input
          type="color"
          name="square-color"
          style={{ width: 40 }}
          value={colorSquare}
          onChange={(e) => setColorSquare(e.target.value)}
        />
        <figure
          style={{
            backgroundColor: colorSquare,
            width: `${sizeSquare}px`,
            height: `${sizeSquare}px`,
          }}
        />
      </div>
    </div>
  );
}

export default App;
