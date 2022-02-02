import React from "react";
import { StyledTable } from "./styles/Table.styled.";
import { Column } from "./styles/Container.styled";
import { ExchangeRate } from "../interfaces";

// TODO: add a title
export default function ExchangeRatesTable(props: {
  exchangeRates: ExchangeRate[];
}) {
  return (
    <Column>
      <StyledTable>
        <thead>
          <tr key={"thead>tr"}>
            <th>Country</th>
            <th>Currency</th>
            <th>To CZK</th>
          </tr>
        </thead>
        <tbody>
          {props.exchangeRates.map((exchangeRate, index) => {
            return (
              <tr key={index}>
                <th>{exchangeRate.country}</th>
                <th>{exchangeRate.amount + " " + exchangeRate.code}</th>
                <th>{exchangeRate.rate + " CZK"}</th>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </Column>
  );
}
