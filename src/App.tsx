import { useState, useEffect } from "react";

import InputSize from "./components/atoms/InputSize"
import InputColor from "./components/atoms/InputColor"
import Triangle from "./components/atoms/Triangle"
import Circle from "./components/atoms/Circle"
import Square from "./components/atoms/Square"

import "./App.css";


function App() {  
  const [colorTriangle, setColorTriangle] = useState("#800000");
  const [colorCircle, setColorCircle] = useState("#4DD44D");
  const [colorSquare, setColorSquare] = useState("#564DD4");

  const [sizeTriangle, setSizeTriangle] = useState("");
  const [sizeCircle, setSizeCircle] = useState("");
  const [sizeSquare, setSizeSquare] = useState("10");

  useEffect(() => {
    setSizeTriangle("50");
    setSizeCircle("80");
    setSizeSquare("60");
  }, []);

  if (sizeTriangle === sizeCircle && sizeTriangle === sizeSquare) {
    alert(`The three figures have the same size`);
  }

  if (colorTriangle === colorCircle && colorTriangle === colorSquare) {
    alert(`The three figures have the same color`);
  }

  return (
    <div className="App">
      <h4>
        <strong>Exercise useState & useEffect .</strong>
      </h4>
      <div className="triangle">        
        <InputSize  size={sizeTriangle}
          onChange={(e) => setSizeTriangle(e.target.value)}/>
        <br />
        <InputColor label="Triangle color" color={colorTriangle} onChange={(e) => setColorTriangle(e.target.value)} />       
        <Triangle size={sizeTriangle} color={colorTriangle} />
      </div>
      <br />
      <br />
      <div className="circle">
        <InputSize  size={sizeCircle} onChange={(e) => setSizeCircle(e.target.value)} />
        <br />
        <InputColor label="Circle color" color={colorCircle} onChange={(e) => setColorCircle(e.target.value)} />
        <Circle size={sizeCircle} color={colorCircle} />
      </div>
      <br />
      <br />
      <div className="square">          
        <InputSize id="inputSquare" size={sizeSquare} onChange={(e) => setSizeSquare(e.target.value)} />
        <br />
        <InputColor label="Square color" color={colorSquare} onChange={(e) => setColorSquare(e.target.value)} />
        <Square size={sizeSquare} color={colorSquare} />
      </div>
    </div>
  );
}

export default App;
