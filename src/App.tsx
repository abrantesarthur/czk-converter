import { QueryClientProvider, QueryClient } from "react-query";
import ExchangeRatesPage from "./components/ExchangeRatesPage";

const queryClient = new QueryClient();

// TODO: create global style
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeRatesPage></ExchangeRatesPage>
    </QueryClientProvider>
  );
}

export default App;
