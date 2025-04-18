"use client";

import { useEffect, useState } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinPrice() {
  const [price, setPrice] = useState(null);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    async function fetchBitcoinPrice() {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        setPrice(data.bitcoin[currency.toLowerCase()]); // Access correct data structure
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    }

    fetchBitcoinPrice();
  }, [currency]); // Add dependency on currency state

  return (
    <div>
      <h1>Current Bitcoin Price</h1>
      {price ? (
        <p>
          {currency}: ${price}
        </p>
      ) : (
        <p>Loading...</p>
      )}
      <div>
        {/* Dropdown to select currency */}
        <label htmlFor="currency">Choose a currency: </label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="AUD">AUD</option>
          <option value="NZD">NZD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="SGD">SGD</option>
        </select>
      </div>
    </div>
  );
}
