import React, { useState } from "react";

// TODO: allow only numbers to be inserted in the form
export default function ExchangeRateForm() {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/;
    // update state only if input is a number
    if (e.target.value === "" || re.test(e.target.value)) {
      setAmount(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("event submitted");
  };

  return (
    <div>
      <h1>form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">
            Amount
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
            ></input>
          </label>
          <label htmlFor="amount">
            Currency
            <select>
              <option value="usd">USD</option>
              <option value="brl">BRL</option>
            </select>
          </label>
          <input type="submit" value="Convert"></input>
        </div>
      </form>
    </div>
  );
}
