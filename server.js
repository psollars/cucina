const express = require("express");
const app = express();
const orm = require("./data/orm");
const PORT = process.env.PORT || 5000;

app.use(express.static("client/build"));

app.post("/api/v1/save-item", (req, res) => {
  console.log(req.body);
  const newItem = req.body;
  const dbResult = orm.create(newItem, "ingredient");

  dbResult.then(result => {
    res.status(201);
    res.send("SUCCESS");
  });
});

app.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});
