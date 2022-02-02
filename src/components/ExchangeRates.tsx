import { useQuery } from "react-query";
import { ExchangeRates } from "../services/exchangeRates";
import ExchangeRatesForm from "./ExchangeRatesForm";
import ExchangeRatesTable from "./ExchangeRatesTable";
import { Column, Container } from "./styles/Container.styled";

export default function ExchangeRatesPage() {
  const { data, status } = useQuery("exchangeRates", ExchangeRates.get);

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
        <ExchangeRatesForm exchangeRates={data}></ExchangeRatesForm>
        <ExchangeRatesTable exchangeRates={data}></ExchangeRatesTable>
      </Column>
    </Container>
  );
}
