const { parseRequestBody } = require("./bodyParser.middleware");
const { limiter } = require("./rateLimit.middleware");

module.exports = {
  parseRequestBody,
  limiter,
};
