interface ExchangeRate {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
}

const fecthExchangeRates = async (): Promise<ExchangeRate[]> => {
  try {
    const response = await fetch(
      "https://www.cnb.cz/en/financil-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
    );
    const data = await response.text();
    return parseExchangeRatesData(data);
  } catch (_) {
    return [];
  }
};

const parseExchangeRatesData = (data: string): ExchangeRate[] => {
  return data
    .split("\n")
    .slice(2, -1)
    .map((line) => {
      let values = line.split("|");
      return {
        country: values[0],
        currency: values[1],
        amount: Number(values[2]),
        code: values[3],
        rate: Number(values[4]),
      };
    });
};

export { fecthExchangeRates };
