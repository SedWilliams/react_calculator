import React from "react";

//Have button take in id prop, and set it to a local variable

interface ButtonProps {
    insertedNum: any;
    handleButtonPress(insertedNum): void;
}

export default function Button({ insertedNum, handleButtonPress}: ButtonProps) {

    function handleClick(insertedNum) {
      handleButtonPress(insertedNum);
    }

    return <button onClick={handleClick} className="button">{insertedNum}</button>;
  }