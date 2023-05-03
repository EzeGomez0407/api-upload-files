const express = require("express");
const app = express();
const { PORT } = process.env;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/index");

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(cors());

app.use(express.static("public/img"));
app.use(express.static("public/video"));
app.use(express.static("public/file"));

app.use("/", routes);

app.listen(PORT || 3002, () => {
  console.log(`server on port ${PORT}`);
});
