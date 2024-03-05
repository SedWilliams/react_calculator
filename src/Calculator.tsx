//TODO:
//  * Make code more cohesive
//    * --Seperate equation bar into component--
//    * --Seperate button into its own component--
//    * --Refactor "Operation" (calculation) logic--
//    * Make tutorial covering how to make the calculator

import React, { useState } from "react";
import EquationDisplay from "./components/EquationDisplay"
import Button from "./components/Button";

function Calculator() {

  //what's currently displayed in the equation bar
  //expects type: number
  const [TempNumPlaceholder, setTempNumPlaceholder] = useState(0);

  //Holds the state of the whole equation
  //expects type: number
  const [Equation, setEquation] = useState(0);

  //contains what operation is to be performed after being selected by user via button
  //expects type: String
  const [Operation, setOperation] = useState("");

  function handleButtonPress(insertedNum: any) {
    if (TempNumPlaceholder === 0) {
      setTempNumPlaceholder(insertedNum);
      //console.log(insertedNum);
    } else {
      setTempNumPlaceholder((prev) => (
        prev * 10 + insertedNum
      ));
      //console.log(insertedNum);
    }
  }

  interface performOperationProps {
    //operation buttons pass a string value as the ID
    id: String;
  }

  function PerformOperation({ id }: performOperationProps) {

    function handleClick() {

      //early returns
      if(id === "AC") {
        //reset all calculator state
        setTempNumPlaceholder(0);
        setEquation(0);
        setOperation("");
      };

      //only these IDs will be considered a valid operation
      if (id === "/" || id === "X" || id === "+" || id === "-") {
        // Set the current operation based on the ID of the operation button pressed
        //update the tempNumPlaceholder back to 0
        setOperation(id.toString());
        //console.log(Operation + ":" + typeof(Operation));
        //equation must be update to hold the first number entered, and then
        //TempNumPlaceholder will be able to take in the scond half of the equation
        setEquation(TempNumPlaceholder);
        //setTempNumPlaceholder reset after passing it's first value (first half of the equation)
        //to Equation
        setTempNumPlaceholder(0);
      }

      //if ID of button selected is "=", then do arithmetic
      if (id === "=") {
        // Perform the calculation based on the operation that was set by the other operation buttons
        let result;
        if (Operation === "+") {
          result = Equation + TempNumPlaceholder;
        } else if (Operation === "-") {
          result = Equation - TempNumPlaceholder;
        } else if (Operation === "X") {
          result = Equation * TempNumPlaceholder;
        } else if (Operation === "/") {
          result = Equation / TempNumPlaceholder;
        }
        // Display the result
        setTempNumPlaceholder(result);
        // Reset equation and operation after calculation
        setEquation(0);
        setOperation("");
        return;
      }
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
