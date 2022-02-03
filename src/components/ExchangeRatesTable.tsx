import { StyledTable } from "./styles/Table.styled.";
import { ExchangeRates } from "../services/exchangeRates";

export default function ExchangeRatesTable(props: {
  exchangeRates: ExchangeRates;
}) {
  return (
    <StyledTable>
      <thead>
        <tr key={"thead>tr"}>
          <th>Country</th>
          <th>Currency</th>
          <th>To CZK</th>
        </tr>
      </thead>
      <tbody>
        {props.exchangeRates.list.map((exchangeRate, index) => {
          return (
            <tr key={index}>
              <th>{exchangeRate.country}</th>
              <th>{exchangeRate.amount + " " + exchangeRate.currencyCode}</th>
              <th>{exchangeRate.rate.toFixed(3) + " CZK"}</th>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
}
