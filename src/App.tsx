import ExchangeRatesTable from "./components/ExchangeRatesTable";
import { QueryClientProvider, QueryClient } from "react-query";
import { Column, Container } from "./components/styles/Container.styled";
import ExchangeRateForm from "./components/ExchangeRateForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Column>
          <ExchangeRateForm></ExchangeRateForm>
          <ExchangeRatesTable></ExchangeRatesTable>
        </Column>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
