import { useQuery } from "react-query";
import { ExchangeRates } from "../services/exchangeRates";
import ExchangeRatesForm from "./ExchangeRatesForm";
import ExchangeRatesTable from "./ExchangeRatesTable";
import { Column, Container } from "./styles/Container.styled";
import { FormTitle } from "./styles/Form.styled";
import { TableTitle } from "./styles/Table.styled.";

export default function ExchangeRatesPage() {
  const { data, status } = useQuery("exchangeRates", ExchangeRates.get);

  if (status === "loading") {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );
  }

  if (status === "error" || data === undefined) {
    return (
      <Container>
        {process.env.NODE_ENV === "development" ? (
          <h1>Try again with 'npm run dev'</h1>
        ) : (
          <h1>Internal Server Error (500).</h1>
        )}
      </Container>
    );
  }

  return (
    <Container>
      (
      <Column alignItems="flex-start">
        <FormTitle>Convert Currencies to CZK</FormTitle>
        <ExchangeRatesForm exchangeRates={data}></ExchangeRatesForm>
        <TableTitle>CZK Conversion Table</TableTitle>
        <ExchangeRatesTable exchangeRates={data}></ExchangeRatesTable>
      </Column>
      )
    </Container>
  );
}
