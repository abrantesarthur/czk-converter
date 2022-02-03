const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

// enable CORS
app.use(cors());

// health enpoint
app.get("/", (req, res) => {
  res.send("alive");
});

app.get("/czk-exchange-rates", (req, res) => {
  const url =
    "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";
  axios.get(url).then((response) => res.send(response.data));
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
