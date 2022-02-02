import { StyledTable } from "./styles/Table.styled.";
import { ExchangeRate } from "../interfaces";

// TODO: add a title
export default function ExchangeRatesTable(props: {
  exchangeRates: ExchangeRate[];
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
        {props.exchangeRates.map((exchangeRate, index) => {
          return (
            <tr key={index}>
              <th>{exchangeRate.country}</th>
              <th>{exchangeRate.amount + " " + exchangeRate.code}</th>
              <th>{exchangeRate.rate.toFixed(2) + " CZK"}</th>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
}
