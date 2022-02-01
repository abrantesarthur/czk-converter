import React from "react";
import { fecthExchangeRates } from "../services/exchangeRates";
import { useQuery } from "react-query";

export default function ExchangeRates() {
  const { data, status } = useQuery("exchangeRates", fecthExchangeRates);

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
      <h1>{data[0].country}</h1>
    </div>
  );
}
