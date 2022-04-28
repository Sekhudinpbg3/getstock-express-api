const express = require("express");
const { body } = require("express-validator");
const { getAllStocks } = require("../controllers/stock/getAll");
const { getAllIndex } = require("../controllers/stock/getIndex");
const { getSectors } = require("../controllers/stock/getSectors");
const { getWithParams } = require("../controllers/stock/getWithParams");
const router = express.Router();

router.get(`/index`, getAllIndex);
router.get(`/sectors`,getSectors);
router.get(`/search`,getWithParams );
router.get(`/getall`, getAllStocks );

module.exports = router;
