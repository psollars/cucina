const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const router = require("./server/controllers/router");
const bodyParser = require("body-parser");

app.use(express.static("./client/build"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});
