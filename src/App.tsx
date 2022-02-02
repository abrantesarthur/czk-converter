import { QueryClientProvider, QueryClient } from "react-query";
import ExchangeRatesPage from "./components/ExchangeRatesPage";
import Global from "./components/styles/Global.styled";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global />
      <ExchangeRatesPage></ExchangeRatesPage>
    </QueryClientProvider>
  );
}

export default App;
