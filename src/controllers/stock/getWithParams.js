const extraSchema = require("../../models/main");
const schemaBase = require("../../models/main");
const client = require("./client");

const validate = async (params) => {
  const schema = params.per_page ? schemaBase.concat(extraSchema) : schemaBase;
  await schema.validate(params);
  const data = schema.cast(params);
  return {
    Keywords: data.search,
    pageBegin: data.page,
    pageLength: data.per_page,
    sortField: data.sort_by,
    sortOrder: data.sort_direction.toUpperCase(),
    Index: data.index_id,
    StockSector: data.sector_id,
    StockSubSector: data.subsector_id,
  };
};
const getData = async (params = {}) => {
  const parsedParams = await validate(params);
  try {
    const response = await client.get("/StockSearchResult/GetAll", {
      params: parsedParams,
    });
    return response.data;
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(message);
  }
};

exports.getWithParams = async (req, res) => {
  try {
    const data = await getData(req.query);
    return res.json({
      message: "Data saham",
      total_data: Object.keys(data).length,
      current_page: req.query.page ? req.query.page : 1,
      data: data,
    });
  } catch (error) {
    const status = error.name === "ValidationError" ? 422 : 500;
    return res.status(status).json({ error: error.message });
  }
};
