const asyncMiddleware = require("./../utilities/asyncMiddleware");
const recipeService = require("./../services/recipesService");

const recipeController = {
  retrieveAllRecipes: asyncMiddleware(async (req, res, next) => {
    const retrieveAllRecipesResult = await recipeService.retrieveAllRecipes();
    res.json(retrieveAllRecipesResult);
  }),

  retrieveRecipe: asyncMiddleware(async (req, res, next) => {
    const recipeId = req.params.id;
    const retrieveRecipeResult = await recipeService.retrieveRecipe(recipeId);
    res.json(retrieveRecipeResult);
  }),

  createRecipe: asyncMiddleware(async (req, res, next) => {
    const body = req.body;
    const createRecipeResult = await recipeService.createRecipe(body);
    res.json(createRecipeResult);
  })
};

module.exports = recipeController;
