import { useContext, useEffect, useReducer } from "react";
import { useData } from "../hooks/BitcoinSync";
import { Context } from "./EmojiContext";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

const initialState = {
  currency: currencies[0],
  bitcoinPrice: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CURRENCY":
      return { ...state, currency: action.payload };
    case "SET_PRICE":
      return { ...state, bitcoinPrice: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function BitcoinRates() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { emoji, changeEmoji } = useContext(Context);

  const data = useData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${state.currency}`
  );

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  useEffect(() => {
    if (data && data.bitcoin) {
      dispatch({
        type: "SET_PRICE",
        payload: data.bitcoin[state.currency.toLowerCase()],
      });
    }
  }, [data, state.currency]);

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select
          value={state.currency}
          onChange={(e) =>
            dispatch({ type: "SET_CURRENCY", payload: e.target.value })
          }
        >
          {options}
        </select>
      </label>
      <p>Current Price: $ {state.bitcoinPrice || "Loading..."}</p>
      <p>Current Emoji: {emoji}</p>
      <button onClick={changeEmoji}>Change Mood</button>
    </div>
  );
}

//step 1. user selects currency
//step 2. we fetch bitcoin price for that currency
//step 3. store new bitcoin price
//step 4 display new bitcoin price
