import React, { useState } from "react";
import { ExchangeRate } from "../interfaces";
import {
  DropdownMenu,
  StyledForm,
  StyledLabel,
  SubmitButton,
  TextInput,
} from "./styles/Form.styled";

// TODO: add a title
export default function ExchangeRatesForm(props: {
  exchangeRates: ExchangeRate[];
}) {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[-+]?[0-9]*\.?[0-9]*$/;
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
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="amount">Amount</StyledLabel>
      <TextInput
        type="text"
        id="amount"
        value={amount}
        onChange={handleAmountChange}
      ></TextInput>
      <StyledLabel htmlFor="amount">From</StyledLabel>
      <DropdownMenu value={currency} onChange={handleCurrencyChange}>
        {props.exchangeRates.map((exchangeRate) => {
          return (
            <option value={exchangeRate.code}>
              {exchangeRate.code + " - " + exchangeRate.currency}
            </option>
          );
        })}
      </DropdownMenu>
      <SubmitButton type="submit" value="Convert To CZK"></SubmitButton>
    </StyledForm>
  );
}
