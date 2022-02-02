export class ExchangeRate {
  country: string;
  currencyName: string;
  amount: number;
  currencyCode: string;
  rate: number;

  constructor(
    country: string,
    currencyName: string,
    amount: number,
    currencyCode: string,
    rate: number
  ) {
    this.country = country;
    this.currencyName = currencyName;
    this.amount = amount;
    this.currencyCode = currencyCode;
    this.rate = rate;
  }

  getRateFrom(currencyName: string) {
    if ((currencyName = this.currencyName)) {
      return this.rate;
    }
  }
}

export class ExchangeRates {
  list: ExchangeRate[];

  constructor(list: ExchangeRate[]) {
    this.list = list;
  }

  get = async (): Promise<ExchangeRates> => {
    try {
      const response = await fetch(
        "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
      );
      const data = await response.text();
      return this.parse(data);
    } catch (_) {
      return new ExchangeRates([]);
    }
  };

  getRatesFrom = (currencyCode: string) => {};

  parse = (data: string): ExchangeRates => {
    return new ExchangeRates(
      data
        .split("\n")
        .slice(2, -1)
        .map((line) => {
          let values = line.split("|");
          return new ExchangeRate(
            values[0],
            values[1],
            Number(values[2]),
            values[3],
            round(Number(values[4]))
          );
        })
    );
  };
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
