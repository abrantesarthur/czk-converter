import { useQuery } from "react-query";
import { ExchangeRates } from "../services/exchangeRates";
import ExchangeRatesForm from "./ExchangeRatesForm";
import ExchangeRatesTable from "./ExchangeRatesTable";
import { Column, Container } from "./styles/Container.styled";
import { FormTitle } from "./styles/Form.styled";
import { TableTitle } from "./styles/Table.styled.";

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
      <Column alignItems="flex-start">
        <FormTitle>Convert Currencies to CZK</FormTitle>
        <ExchangeRatesForm exchangeRates={data}></ExchangeRatesForm>
        <TableTitle>CZK Conversion Table</TableTitle>
        <ExchangeRatesTable exchangeRates={data}></ExchangeRatesTable>
      </Column>
    </Container>
  );
}
