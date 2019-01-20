const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const orm = require("./data/orm");
const PORT = process.env.PORT || 5000;

app.use(express.static("client/build"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/v1/ingredient", async (req, res) => {
  try {
    const body = req.body;
    const dbResult = await orm.createIngredient(body.ingredient);
    res.json(dbResult);
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});
