import React, { useState } from "react";

export function Calculator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState(null);

  const digitArray = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  const handleDigitClick = (e, setInput) => {
    setInput((prevInput) => prevInput + e.target.value);
  };

  const handleAdd = () => {
    setResult(Number(input1) + Number(input2));
  };

  const handleSubtract = () => {
    setResult(Number(input1) - Number(input2));
  };

  const handleEquals = () => {
    try {
      setResult(eval(input1)); // Example only: eval should be avoided for security reasons.
    } catch {
      setResult("Error");
    }
  };

  return (
    <div name="calculator" className="calculator">
      <div className="result">
        {result !== null && <h2>Result: {result}</h2>}
      </div>
      <form>
        <div className="inputFields">
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Input 1"
          />
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Input 2"
          />
        </div>
        <div className="numButtons">
          {digitArray.map((digit) => (
            <button
              key={digit.id}
              className="digits"
              value={digit.id}
              onClick={(e) => handleDigitClick(e, setInput1)} // Appends digit to input1
            >
              {digit.id}
            </button>
          ))}
          <button
            className="digits"
            id="decimal"
            value="."
            onClick={(e) => handleDigitClick(e, setInput1)}
          >
            .
          </button>
          <button className="operator" onClick={handleAdd}>
            Add
          </button>
          <button className="operator" onClick={handleSubtract}>
            Subtract
          </button>
          <button className="digits" id="equals" onClick={handleEquals}>
            =
          </button>
        </div>
      </form>
    </div>
  );
}
