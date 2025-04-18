import { useRef, useState } from "react";

export function RefCounter() {
  const [countState, setCountState] = useState(0);

  let countRef = useRef(0);
  let count = 0; //every time component is re rendered it resets to its default value

  function handleClick() {
    countRef.current = countRef.current + 1;
    count = count + 1;
    alert(`You clicked ${countRef.current} (${count}) times!`);
  }

  return (
    <div className="RefCounter componentBox">
      <button onClick={handleClick}>REF COUNTER: Click me!</button> Ref:{" "}
      {countRef.current} Var: {count} <br />
      <button onClick={() => setCountState(countState + 1)}>
        STATE COUNTER: Click me to update!
      </button>
      State: {countState}
    </div>
  );
}

//refs are usually reserved for items not on the screen
