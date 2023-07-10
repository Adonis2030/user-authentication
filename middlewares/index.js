const { parseRequestBody } = require("./bodyParser.middleware");
const { limiter } = require("./limit.middleware");

module.exports = {
  parseRequestBody,
  limiter,
};
