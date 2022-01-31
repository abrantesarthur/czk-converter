interface ExchangeRate {
    country: string;
    currency: string;
    amount: number;
    code: string;
    rate: number;
}

const fecthExchangeRates = () : ExchangeRate[] => {
    let response : ExchangeRate[] = [];
    try {
    } catch(_) {
        return [];
    }

  return response;
}

export {fecthExchangeRates};