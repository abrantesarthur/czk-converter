import { useQuery } from "react-query";
import { fecthExchangeRates } from "../services/exchangeRates";
import ExchangeRateForm from "./ExchangeRateForm";
import ExchangeRatesTable from "./ExchangeRatesTable";
import { Column, Container } from "./styles/Container.styled";

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
  return (
    <Container>
      <Column>
        <ExchangeRateForm exchangeRates={data}></ExchangeRateForm>
        <ExchangeRatesTable exchangeRates={data}></ExchangeRatesTable>
      </Column>
    </Container>
  );
}
