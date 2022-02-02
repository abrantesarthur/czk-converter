import { QueryClientProvider, QueryClient } from "react-query";
import ExchangeRates from "./components/ExchangeRates";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeRates></ExchangeRates>
    </QueryClientProvider>
  );
}

export default App;
