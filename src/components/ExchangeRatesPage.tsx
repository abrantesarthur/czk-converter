import { useQuery } from "react-query";
import { ExchangeRates } from "../services/exchangeRates";
import ExchangeRatesForm from "./ExchangeRatesForm";
import ExchangeRatesTable from "./ExchangeRatesTable";
import { Column, Container } from "./styles/Container.styled";
import { FormTitle } from "./styles/Form.styled";
import { TableTitle } from "./styles/Table.styled.";

export default function ExchangeRatesPage() {
  const { data, status } = useQuery("exchangeRates", ExchangeRates.get);

  return (
    <Container>
      {status === "loading" ? (
        <h1>Loading...</h1>
      ) : status === "error" || data === undefined ? (
        <h1>Something wrong happened. Try again later.</h1>
      ) : (
        <Column alignItems="flex-start">
          <FormTitle>Convert Currencies to CZK</FormTitle>
          <ExchangeRatesForm exchangeRates={data}></ExchangeRatesForm>
          <TableTitle>CZK Conversion Table</TableTitle>
          <ExchangeRatesTable exchangeRates={data}></ExchangeRatesTable>
        </Column>
      )}
    </Container>
  );
}
