import { QueryClientProvider, QueryClient } from "react-query";
import ExchangeRates from "./components/ExchangeRates";

const queryClient = new QueryClient();

// TODO: make it responsive
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeRates></ExchangeRates>
    </QueryClientProvider>
  );
}

export default App;
