import React from "react";

//the problem was I was referencing a variable passed to my handleClick function
//when i should have been referencing the variable passed to my component

interface ButtonProps {
    insertedNum: any;
    handleButtonPress(insertedNum): void;
}

export default function Button({ insertedNum, handleButtonPress}: ButtonProps) {

    function handleClick() {
      handleButtonPress(insertedNum);
    }

    return <button onClick={handleClick} className="button">{insertedNum}</button>;
  }