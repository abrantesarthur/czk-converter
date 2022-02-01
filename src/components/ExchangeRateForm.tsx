import React, { useState } from "react";

// TODO: allow only numbers to be inserted in the form
export default function ExchangeRateForm() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/;
    // update state only if input is a number
    if (e.target.value === "" || re.test(e.target.value)) {
      setAmount(e.target.value);
    }
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: what does this do?
    e.preventDefault();
  };

  return (
    <div>
      <h1>form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
          ></input>
          <label htmlFor="amount">Currency</label>
          <select value={currency} onChange={handleCurrencyChange}>
            <option value="usd">USD</option>
            <option value="brl">BRL</option>
          </select>
          <input type="submit" value="Convert"></input>
        </div>
      </form>
    </div>
  );
}
