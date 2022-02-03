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

  getRate = () => this.rate / this.amount;
}

export class ExchangeRates {
  list: ExchangeRate[];

  constructor(list: ExchangeRate[]) {
    this.list = list;
  }

  getRateFrom = (currencyCode: string, amount = 1.0): number | undefined => {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].currencyCode === currencyCode) {
        return round(this.list[i].getRate() * amount);
      }
    }
  };

  static get = async (): Promise<ExchangeRates> => {
    try {
      // EXCHANGE_RATES_URL could be set in production for instance
      const response = await fetch("http://localhost:5000/czk-exchange-rates");
      const data = await response.text();
      return ExchangeRates.parse(data);
    } catch (e) {
      throw e;
    }
  };

  // parse data, map it to list of ExchangeRate, and filter out invalid results
  static parse = (data: string): ExchangeRates => {
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
        .filter((exchangeRate) => exchangeRate.amount !== 0)
    );
  };
}

export const round = (value: number, decimals = 3) => {
  decimals = decimals < 1 ? 1 : decimals;
  return Math.round(value * 10 ** decimals) / 10 ** decimals;
};
