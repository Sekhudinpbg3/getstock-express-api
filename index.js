const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000;

const stockRouter = require("./src/routers/stocks");

const app = express();

// MidleWare + CORS
app.use(cors());

// Routers
app.get("/", (req, res, next) => {
  res.sendFile("./index.html", { root: __dirname });
});
app.use("/v1/stocks", stockRouter);

// Error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;
  const data = err.data;

  // mengirim response
  res.status(status).json({
    message: message,
    data: data,
  });
});

app.listen(port, () => {
  console.log("Connection Succes!");
});
