import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {


// Js for dynamic :)
const [result, setResult] = useState("");

const clickHandler = (e) => setResult(result.concat(e.target.name));

const clear = () => setResult("");

const backspace  = () => setResult(result.slice(0, -1));


//result

const calculate = () => 
{
  try{
    setResult(eval(result).toString())
  }
  catch (error) {
    setResult("Syntax Error")
  }
}
  //UI
  return (
    // Inputs
    <div className="container">
      <form>
        <input type={"text"} value={result}/>
      </form>

      <div className="Keypad">
        <button className="clear lights" onClick={clear}>Clear</button>
        <button className="backspace lights" onClick={backspace}>C</button>
        <button onClick={clickHandler} name="/" className="lights">&divide;</button>
        <button onClick={clickHandler} name="7">7</button>
        <button onClick={clickHandler} name="8">8</button>
        <button onClick={clickHandler} name="9">9</button>
        <button onClick={clickHandler} name="*" className="lights">&times;</button>
        <button onClick={clickHandler} name="4">4</button>
        <button onClick={clickHandler} name="5">5</button>
        <button onClick={clickHandler} name="6">6</button>
        <button onClick={clickHandler} name="-" className="lights">&ndash;</button>
        <button onClick={clickHandler} name="1">1</button>
        <button onClick={clickHandler} name="2">2</button>
        <button onClick={clickHandler} name="3">3</button>
        <button onClick={clickHandler} name="+" className="lights">+</button>
        <button onClick={clickHandler} name="0">0</button>
        <button onClick={clickHandler} name=".">.</button>
        <button className="result lights" onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default App;
