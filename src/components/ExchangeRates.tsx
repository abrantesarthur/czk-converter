import React, { useEffect } from "react";
import { fecthExchangeRates } from "../services/exchangeRates";

export default function ExchangeRates() {
  useEffect(() => {
    fecthExchangeRates();
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
