const asyncMiddleware = require("./../utilities/asyncMiddleware");
const ingredientsRepository = require("./../repositories/ingredientsRepository");

const recipeController = {
  getAllIngredients: asyncMiddleware(async (req, res, next) => {
    const dbResult = await ingredientsRepository.getAllIngredients();
    res.json(dbResult.rows);
  }),

  createIngredient: asyncMiddleware(async (req, res, next) => {
    const body = req.body;
    const dbResult = await ingredientsRepository.createIngredient(
      body.ingredient
    );
    res.json(dbResult);
  })
};

module.exports = recipeController;
