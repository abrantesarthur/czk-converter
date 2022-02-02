import ExchangeRatesTable from "./components/ExchangeRatesTable";
import { QueryClientProvider, QueryClient } from "react-query";
import { Column, Container } from "./components/styles/Container.styled";
import ExchangeRateForm from "./components/ExchangeRateForm";
import { useQuery } from "react-query";
import { fecthExchangeRates } from "./services/exchangeRates";

const queryClient = new QueryClient();

function App() {
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
    <QueryClientProvider client={queryClient}>
      <Container>
        <Column>
          <ExchangeRateForm exchangeRates={data}></ExchangeRateForm>
          <ExchangeRatesTable exchangeRates={data}></ExchangeRatesTable>
        </Column>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
