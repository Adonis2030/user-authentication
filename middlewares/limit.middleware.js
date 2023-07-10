const RateLimit = require("express-rate-limit");
require("dotenv").config();

// Create a rate limiter middleware
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute - The time window for which requests are checked
  max: process.env.REQUEST_RATE_LIMIT, // Maximum number of requests allowed within the window
});

module.exports = {
  limiter,
};
