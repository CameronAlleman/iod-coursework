import { useReducer } from "react";

const reducer = (state, action) => {
  switch (
    action.type // switch statements are common in reducers, usually stored in a different file
  ) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "incrementByFive":
      return state + 5;
    case "decrementByFive":
      return state - 5;
    default: //the default handles anything that is not in the cases
      return state;
  }
}; //this is just JS, so if it is exported it will be in a js file
//this is just JS, so if it is exported it will be in a js file
function ReducerCounter() {
  const [counter, dispatch] = useReducer(reducer, 0);
  //   const [counter2, setCounter2] = useState(0); example of difference to useState

  const handleIncrement = () => {
    dispatch({ type: "increment" });
    // setCounter2(counter2 + 1)
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
    // setCounter2(counter2 - 1)
  };

  const handleincrementByFive = () => {
    dispatch({ type: "incrementByFive" });
    // setCounter2(counter2 + 5)
  };

  const handledecrementByFive = () => {
    dispatch({ type: "decrementByFive" });
    // setCounter2(counter2 - 5)
  };

  return (
    <div className="ReducerCounter componentBox">
      <h2>Count: {counter}</h2>
      <button onClick={handleincrementByFive}>Reducer Increment by 5</button>
      <button onClick={handleIncrement}>Reducer Increment</button>
      <button onClick={handleDecrement}>Reducer Decrement</button>
      <button onClick={handledecrementByFive}>Reducer Decrement by 5</button>
    </div>
  );
}
// see next slide for reducer function
export default ReducerCounter;
