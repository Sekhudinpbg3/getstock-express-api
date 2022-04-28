const client = require("./client");

exports.getAllIndex = (req, res, next) => {
  client
    .get("/Stock/GetIndexFilters")
    .then((result) => {
      res.json({
        message: 'stock index list',
        total_data: Object.keys(result.data).length,
        curent_page: req.query.page?req.query.page:1,
        data: result.data,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
      res.json({
        message: "Data gagal dimuat!",
      });
    });
};
