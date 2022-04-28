const client = require("./client");

exports.getAllStocks = (req, res, next) => {
  client
    .get("/StockSearchResult/GetAll")
    .then((result) => {
      res.json({
        message: "total issuer shares",
        total_data: Object.keys(result.data).length,
        data: result.data,
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};
