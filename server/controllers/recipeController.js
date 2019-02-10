const ingredientsRepository = require("./../repositories/ingredientsRepository");

const recipeController = {
  getAllIngredients: async (req, res, next) => {
    try {
      const dbResult = await ingredientsRepository.getAllIngredients();
      res.json(dbResult.rows);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  createIngredient: async (req, res, next) => {
    try {
      const body = req.body;
      const dbResult = await ingredientsRepository.createIngredient(
        body.ingredient
      );
      res.json(dbResult);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  test: (req, res) => {
    res.json(ingredientsRepository.doStuff());
  }
};

module.exports = recipeController;
