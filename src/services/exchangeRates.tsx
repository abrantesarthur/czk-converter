export interface ExchangeRates {
  list: ExchangeRate[];
}

namespace ExchangeRates {
  export const get = async (): Promise<ExchangeRates> => {
    try {
      const response = await fetch(
        "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
      );
      const data = await response.text();
      return parse(data);
    } catch (_) {
      return { list: [] };
    }
  };

  const parse = (data: string): ExchangeRates => {
    return {
      list: data
        .split("\n")
        .slice(2, -1)
        .map((line) => {
          let values = line.split("|");
          return {
            country: values[0],
            currencyName: values[1],
            amount: Number(values[2]),
            currencyCode: values[3],
            rate: round(Number(values[4])),
          };
        }),
    };
  };
}

export interface ExchangeRate {
  country: string;
  currencyName: string;
  amount: number;
  currencyCode: string;
  rate: number;
}

const round = (value: number, decimals = 2) => {
  decimals = decimals < 1 ? 1 : decimals;
  return Math.round(value * 10 ** decimals) / 10 ** decimals;
};

export enum CurrencyCode {
  AUD = "AUD",
  BRL = "BRL",
  BGN = "BGN",
  CAD = "CAD",
  CNY = "CNY",
  HRK = "HRK",
  DKK = "DKK",
  EUR = "EUR",
  HKD = "HKD",
  HUF = "HUF",
  ISK = "ISK",
  XDR = "XDR",
  INR = "INR",
  IDR = "IDR",
  ILS = "ILS",
  HPY = "HPY",
  MYR = "MYR",
  MXN = "MXN",
  NZD = "NZD",
  NOK = "NOK",
  PHP = "PHP",
  PLN = "PLN",
  RON = "RON",
  RUB = "RUB",
  SGD = "SGD",
  ZAR = "ZAR",
  KRW = "KRW",
  SEK = "SEK",
  CHF = "CHF",
  THB = "THB",
  TRY = "TRY",
  GBP = "GBP",
  USD = "USD",
}
