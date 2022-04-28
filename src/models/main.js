const yup = require("yup");
const client = require("../controllers/stock/client");

const SORTABLE_FIELDS = [
  "Code",
  "Name",
  "SectorName",
  "SubSectorName",
  "Last",
  "AdjustedClosingPrice",
  "PrevClosingPrice",
  "AdjustedOpenPrice",
  "AdjustedHighPrice",
  "AdjustedLowPrice",
  "Per",
  "Pbr",
  "Volume",
  "Value",
  "Frequency",
  "OneDay",
  "OneWeek",
  "OneMonth",
  "ThreeMonth",
  "SixMonth",
  "OneYear",
  "ThreeYear",
  "FiveYear",
  "TenYear",
  "Mtd",
  "Ytd",
  "Capitalization",
  "BetaOneYear",
  "StdevOneYear",
  "LastDate",
];

const schemaBase = yup.object().shape({
  search: yup.string().trim(),
  page: yup.number().positive().integer().default(1),
  //   per_page: yup.number().positive().integer().default(25),
  sort_by: yup.string().trim().oneOf(SORTABLE_FIELDS).default("Code"),
  sort_direction: yup
    .string()
    .trim()
    .lowercase()
    .oneOf(["asc", "desc"])
    .default("asc"),
  index_id: yup.number().positive().integer(),
  sector_id: yup.number().positive().integer(),
  subsector_id: yup.number().positive().integer(),
});

const extraSchema = yup.object({
  per_page: yup.number().positive().integer(),
});

(module.exports = schemaBase), extraSchema;
