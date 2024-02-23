import React from "react";

interface ButtonProps {
    id: any;
    handleButtonPress(id): void;
}

export default function Button({ id, handleButtonPress}: ButtonProps) {

    function handleClick(id) {
      handleButtonPress(id);
    }

    return <button onClick={handleClick} className="button">{id}</button>;
  }