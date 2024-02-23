import React from "react";

interface EquationDisplayProps {
    num: any;
}

export default function EquationDisplay({num}: EquationDisplayProps) {
    return (
      <form id="result" style={{
        fontFamily: "monospace",
        fontSize: "20px",
      }}>
        <input type="text" value={num} disabled />
      </form>
    );
  }