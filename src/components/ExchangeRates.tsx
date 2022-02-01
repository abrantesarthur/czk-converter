import React from "react";
import { fecthExchangeRates } from "../services/exchangeRates";
import { useQuery } from "react-query";

export default function ExchangeRates() {
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

  console.log(data);

  return (
    <div>
      <h1>Convert to CZK</h1>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Currency</th>
            <th>Amount</th>
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
      </table>
    </div>
  );
}
