const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const compression = require("compression");

require("./configs/database");
const { userRouter } = require("./routes");
const { parseRequestBody, limiter } = require("./middlewares");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(compression());
app.use(parseRequestBody);
app.use(limiter);

// routes
app.get("/", (req, res) => res.send("Welcome to Soultrain!"));
app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
