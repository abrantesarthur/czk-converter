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

  // TODO: fix
  getRate() {
    return this.rate;
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

  getRateFrom = (currencyCode: string): number | undefined => {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].currencyCode === currencyCode) {
        return this.list[i].getRate();
      }
    }
  };

  parse = (data: string): ExchangeRates => {
    // parse data, map it to list of ExchangeRate, and filter out invalid results
    return new ExchangeRates(
      data
        .split("\n")
        .slice(2, -1)
        .map((line) => {
          let values = line.split("|");
          if (values.length === 5) {
            return new ExchangeRate(
              values[0],
              values[1],
              Number(values[2]),
              values[3],
              round(Number(values[4]))
            );
          }
          return new ExchangeRate("", "", 0, "", 0);
        })
        .filter((exchangeRate) => exchangeRate.country !== "")
    );
  };
}

const round = (value: number, decimals = 2) => {
  decimals = decimals < 1 ? 1 : decimals;
  return Math.round(value * 10 ** decimals) / 10 ** decimals;
};
