import React from "react";

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