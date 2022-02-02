import React, { useState } from "react";
import { ExchangeRate } from "../interfaces";
import { Column, Row } from "./styles/Container.styled";
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

  // TODO: warn user if input is missing
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // stop browser from refreshing page
    e.preventDefault();

    console.log(currency);
    console.log(amount);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Row justifyContent="space-between">
        <Column alignItems="align-start">
          <StyledLabel>Amount</StyledLabel>
          <TextInput
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
          ></TextInput>
        </Column>
        <Column alignItems="align-start">
          <StyledLabel>From</StyledLabel>
          <DropdownMenu value={currency} onChange={handleCurrencyChange}>
            {props.exchangeRates.map((exchangeRate) => {
              return (
                <option value={exchangeRate.code}>
                  {exchangeRate.code + " - " + exchangeRate.currency}
                </option>
              );
            })}
          </DropdownMenu>
        </Column>
      </Row>
      <Row justifyContent="flex-end">
        <SubmitButton type="submit" value="Convert To CZK"></SubmitButton>
      </Row>
    </StyledForm>
  );
}
