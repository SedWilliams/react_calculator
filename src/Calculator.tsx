//TODO:
//  * Make code more cohesive
//    * --Seperate equation bar into component--
//    * Seperate button into its own component
//    * Refactor "Operation" (calculation) logic
//    * Make tutorial covering how to make the calculator

import React, { useState } from "react";
import EquationDisplay from "./components/EquationDisplay"
import Button from "./components/Button";

function Calculator() {

  //what's currently displayed in the equation bar
  const [TempNumPlaceholder, setTempNumPlaceholder] = useState(0);

  //Holds info about the whole equation
  const [Equation, setEquation] = useState("");

  //contains what operation is to be performed
  const [Operation, setOperation] = useState("");

  function handleButtonPress(insertedNum: any) {
    if (TempNumPlaceholder === 0) {
      setTempNumPlaceholder(insertedNum);
      console.log(insertedNum);
    } else {
      setTempNumPlaceholder((prev) => (
        prev * 10 + insertedNum
      ));
      console.log(insertedNum);
    }
  }

  interface performOperationProps {
    id: any;
  }

  function PerformOperation({ id }: performOperationProps) {

    function handleClick() {

      //early returns
      if(id != "=") {return};
      if(id == "AC") {
        setNum(0);
        setEquation(0);
        setOperation("");
      };

      //set operation to be made
      if (id === "/" || id === "X" || id === "+" || id === "-") {
        // Set the current operation and update the equation and placeholder
        setOperation(id);
        setEquation(num);
        setNum(0);
      }

      // Perform the calculation based on the current operation
      if (Operation == "+") {
        setNum(Equation + num);
      } else if (Operation === "-") {
        setNum(Equation - num);
      } else if (Operation === "X") {
        setNum(Equation * num);
      } else if (Operation === "/") {
        setNum(Equation / num);
      }

      // Reset equation and operation after calculation
      setEquation(0);
      setOperation("");
    }

    return <button onClick={handleClick} className="button">{id}</button>;
  }

  return (
    <div>
      <h1>Calculator</h1>
      <div className="calculator">
        <EquationDisplay num={TempNumPlaceholder}/>

        <div className="buttons">
          <div>
            <Button insertedNum={1} handleButtonPress={handleButtonPress}/>
            <Button insertedNum={2} handleButtonPress={handleButtonPress}/>
            <Button insertedNum={3} handleButtonPress={handleButtonPress}/>
            <br />
            <Button insertedNum={4} handleButtonPress={handleButtonPress}/>
            <Button insertedNum={5} handleButtonPress={handleButtonPress}/>
            <Button insertedNum={6} handleButtonPress={handleButtonPress}/>
            <br />
            <Button insertedNum={7} handleButtonPress={handleButtonPress}/>
            <Button insertedNum={8} handleButtonPress={handleButtonPress}/>
            <Button insertedNum={9} handleButtonPress={handleButtonPress}/>
          </div>

          <div className="operations-1 calc">
            <PerformOperation id={"/"} />
            <PerformOperation id={"X"} />
            <PerformOperation id={"+"} />
          </div>
          <div className="operations-2 calc">
            <PerformOperation id={"-"} />
            <PerformOperation id={"AC"} />
            <PerformOperation id={"="} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
