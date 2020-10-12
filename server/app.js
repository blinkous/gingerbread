require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const indexRouter = require("./routes/index");
const recipesRouter = require("./routes/recipes");

const app = express();

// view engine setup
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "./")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(`/api/`, indexRouter);
app.use(`/api/recipes`, recipesRouter);

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});

module.exports = app;
