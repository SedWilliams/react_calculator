import React, { useState } from "react";

function Calculator() {
  const [num, setNum] = useState(0);
  const [equation, setEquation] = useState(null);
  const [operation, setOperation] = useState(null);

  function Button({ id }) {
    function handleClick() {
      if (num === 0) {
        setNum(id);
      } else {
        setNum(Number(`${num}${id}`));
      }
    }

    return <button onClick={handleClick} className="button">{id}</button>;
  }

  function Operation({ id }) {
    function handleClick() {
      if (id === "=") {
        
        // Perform the calculation based on the current operation
        if (operation === "+") {
          setNum(equation + num);
        } else if (operation === "-") {
          setNum(equation - num);
        } else if (operation === "X") {
          setNum(equation * num);
        } else if (operation === "/") {
          setNum(equation / num);
        }
        // Reset equation and operation after calculation
        setEquation(null);
        setOperation(null);
      } else if (id === "AC") {
        setNum(0);
        setEquation(null);
        setOperation(null);
      } else if (id === "/" || id === "X" || id === "+" || id === "-") {
        // Set the current operation and update the equation and placeholder
        setOperation(id);
        setEquation(num);
        setNum(0);
      }
    }

    return <button onClick={handleClick} className="button">{id}</button>;
  }

  function EquationDisplay() {
    return (
      <form id="result" style={{
        fontFamily: "monospace",
        fontSize: "20px",
      }}>
        <input type="text" value={num} disabled />
      </form>
    );
  }

  return (
    <div>
      <h1>Calculator</h1>
      <div className="calculator">
        <EquationDisplay />

        <div className="buttons">
          <div>
            <Button id={1} />
            <Button id={2} />
            <Button id={3} />
            <br />
            <Button id={4} />
            <Button id={5} />
            <Button id={6} />
            <br />
            <Button id={7} />
            <Button id={8} />
            <Button id={9} />
          </div>

          <div className="operations-1 calc">
            <Operation id={"/"} />
            <Operation id={"X"} />
            <Operation id={"+"} />
          </div>
          <div className="operations-2 calc">
            <Operation id={"-"} />
            <Operation id={"AC"} />
            <Operation id={"="} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
