const orm = require("./../repositories/orm");

const recipeController = {
  param: (req, res) => {
    console.log(req.params);
    console.log(req.query);
    try {
      res.json("params yo");
    } catch (error) {
      res.json(error);
    }
  },

  test: (req, res) => {
    try {
      res.json("yo from the controller");
    } catch (error) {
      res.json(error);
    }
  },

  test2: (req, res) => {
    try {
      res.json("post from the controller");
    } catch (error) {
      res.json(error);
    }
  },

  createIngredient: async (req, res) => {
    try {
      const body = req.body;
      const dbResult = await orm.createIngredient(body.ingredient);
      res.json(dbResult);
    } catch (error) {
      res.json(error);
    }
  }
};

module.exports = recipeController;
