import { ExchangeRate } from "../interfaces";

const fecthExchangeRates = async (): Promise<ExchangeRate[]> => {
  try {
    const response = await fetch(
      "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
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
        currencyName: values[1],
        amount: Number(values[2]),
        currencyCode: values[3],
        rate: round(Number(values[4])),
      };
    });
};

// const getRateFrom = (currency: string) => {
//   switch (currency) {
//     case value:
//       break;

//     default:
//       break;
//   }
// };

// Country|Currency|Amount|Code|Rate
// Australia|dollar|1|AUD|15.355
// Brazil|real|1|BRL|4.075
// Bulgaria|lev|1|BGN|12.423
// Canada|dollar|1|CAD|16.953
// China|renminbi|1|CNY|3.372
// Croatia|kuna|1|HRK|3.229
// Denmark|krone|1|DKK|3.267
// EMU|euro|1|EUR|24.300
// Hongkong|dollar|1|HKD|2.752
// Hungary|forint|100|HUF|6.856
// Iceland|krona|100|ISK|16.969
// IMF|SDR|1|XDR|29.985
// India|rupee|100|INR|28.705
// Indonesia|rupiah|1000|IDR|1.494
// Israel|new shekel|1|ILS|6.789
// Japan|yen|100|JPY|18.786
// Malaysia|ringgit|1|MYR|5.125
// Mexico|peso|1|MXN|1.046
// New Zealand|dollar|1|NZD|14.285
// Norway|krone|1|NOK|2.449
// Philippines|peso|100|PHP|42.030
// Poland|zloty|1|PLN|5.347
// Romania|leu|1|RON|4.913
// Russia|rouble|100|RUB|28.311
// Singapore|dollar|1|SGD|15.924
// South Africa|rand|1|ZAR|1.401
// South Korea|won|100|KRW|1.787
// Sweden|krona|1|SEK|2.339
// Switzerland|franc|1|CHF|23.358
// Thailand|baht|100|THB|64.653
// Turkey|lira|1|TRY|1.588
// United Kingdom|pound|1|GBP|29.138
// USA|dollar|1|USD|21.449

const round = (value: number, decimals = 2) => {
  decimals = decimals < 1 ? 1 : decimals;
  return Math.round(value * 10 ** decimals) / 10 ** decimals;
};
export { fecthExchangeRates };
