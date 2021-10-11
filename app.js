/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 10-10-2021
 * @modify date 11-10-2021
 * @desc [Application entry point]
 */

require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");

const router = require("./routes/docs");
const api = require("./routes/api");
const middlewares = require("./helpers/middlewares");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(logger("common"));
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "script-src": [
        "'self' unpkg.com cdnjs.cloudflare.com",
        "'unsafe-eval'",
        "'unsafe-inline'",
      ],
      "font-src": [
        "'self' fonts.googleapis.com fonts.gstatic.com cdnjs.cloudflare.com",
      ],
      "style-src": ["'self' fonts.googleapis.com cdnjs.cloudflare.com"],
    },
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected To Database");
  })
  .catch((err) => {
    console.log("Not Connected " + err);
  });

app.use("/", router);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 2222;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
