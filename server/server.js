const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const router = require("./controllers/router");
const bodyParser = require("body-parser");

app.use(express.static("./../client/build"));
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});
