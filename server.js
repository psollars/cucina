const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./server/controllers/router");
require("dotenv").config();

const app = express();
app.use(express.static("./client/build"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.AccessControlAllowOrigin
  })
);
app.use("/api/v1", router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});
