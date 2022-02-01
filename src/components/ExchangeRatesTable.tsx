import React from "react";
import { fecthExchangeRates } from "../services/exchangeRates";
import { useQuery } from "react-query";
import { StyledTable } from "./styles/Table.styled.";
import { Column } from "./styles/Container.styled";

export default function ExchangeRatesTable() {
  const { data, status } = useQuery("exchangeRates", fecthExchangeRates);

  // TODO: fix loading screen
  if (status === "loading") {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  // TODO: Improve error screen
  if (status === "error" || data === undefined) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <Column>
      <h1>Convert to CZK</h1>
      <StyledTable>
        <thead>
          <tr>
            <th>Country</th>
            <th>Currency</th>
            <th>To CZK</th>
          </tr>
        </thead>
        <tbody>
          {data.map((exchangeRate) => {
            return (
              <tr>
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
