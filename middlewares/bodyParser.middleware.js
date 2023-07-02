const bodyParser = require("body-parser");

// Custom middleware for parsing request bodies
const parseRequestBody = (req, res, next) => {
  bodyParser.urlencoded({ extended: false })(req, res, () => {
    bodyParser.json()(req, res, next);
  });
};

module.exports = {
  parseRequestBody,
};
