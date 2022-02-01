import ExchangeRates from "./components/ExchangeRates";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeRates></ExchangeRates>
    </QueryClientProvider>
  );
}

export default App;
