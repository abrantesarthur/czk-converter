import React, { useState } from "react";
import { ExchangeRates, round } from "../services/exchangeRates";
import { Column, Row } from "./styles/Container.styled";
import {
  DropdownMenu,
  StyledForm,
  StyledLabel,
  SubmitButton,
  TextInput,
} from "./styles/Form.styled";

export default function ExchangeRatesForm(props: {
  exchangeRates: ExchangeRates;
}) {
  const [amount, setAmount] = useState("");
  const [currencyCode, setCurrencyCode] = useState(
    props.exchangeRates.list[0].currencyCode
  );
  const [rateInCZK, setRateInCZK] = useState<number | undefined>();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[-+]?[0-9]*\.?[0-9]*$/;

    // update state only if input is a number
    if (e.target.value === "" || re.test(e.target.value)) {
      setRateInCZK(undefined);
      setAmount(e.target.value);
    }
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRateInCZK(undefined);
    setCurrencyCode(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // stop browser from refreshing page
    e.preventDefault();

    if (amount === "") {
      return;
    }

    setRateInCZK(props.exchangeRates.getRateFrom(currencyCode, Number(amount)));
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
          <DropdownMenu value={currencyCode} onChange={handleCurrencyChange}>
            {props.exchangeRates.list.map((exchangeRate, index) => {
              return (
                <option key={index} value={exchangeRate.currencyCode}>
                  {exchangeRate.currencyCode +
                    " - " +
                    exchangeRate.currencyName}
                </option>
              );
            })}
          </DropdownMenu>
        </Column>
      </Row>
      <Row justifyContent="space-between">
        <StyledLabel>
          {rateInCZK === undefined
            ? ""
            : round(Number(amount)) +
              " " +
              currencyCode +
              " = " +
              rateInCZK +
              " Czech Koruny"}
        </StyledLabel>
        <SubmitButton type="submit" value="Convert To CZK"></SubmitButton>
      </Row>
    </StyledForm>
  );
}
