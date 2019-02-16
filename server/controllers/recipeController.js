const asyncMiddleware = require("./../utilities/asyncMiddleware");
const recipeService = require("./../services/recipesService");

const recipeController = {
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

  // getAllIngredients: asyncMiddleware(async (req, res, next) => {
  //   const dbResult = await ingredientsRepository.getAllIngredients();
  //   res.json(dbResult.rows);
  // }),

  // createIngredient: asyncMiddleware(async (req, res, next) => {
  //   const body = req.body;
  //   const dbResult = await ingredientsRepository.createIngredient(
  //     body.ingredient
  //   );
  //   res.json(dbResult);
  // })
};

module.exports = recipeController;
