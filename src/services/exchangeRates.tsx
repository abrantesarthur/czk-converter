interface ExchangeRate {
    country: string;
    currency: string;
    amount: number;
    code: string;
    rate: number;
}

const fecthExchangeRates = async () : Promise<ExchangeRate[]> => {
    let exchangeRates : ExchangeRate[] = [];
    try {
        const response = await fetch("https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt");
        const data = await response.text();
        exchangeRates = parseExchangeRatesData(data);
    } catch(_) {
        return [];
    }

  return exchangeRates;
}

const parseExchangeRatesData = (data: string) : ExchangeRate[] => {
    console.log(data);
    return [];
}

export {fecthExchangeRates};