const recipesRepository = require("../repositories/recipesRepository");
const ingredientsRepository = require("../repositories/ingredientsRepository");
const instructionsRepository = require("../repositories/instructionsRepository");

const recipeService = {
  getRecipe: async () => {},

  createRecipe: async body => {
    const recipeResult = await recipesRepository.createRecipe(body.recipe);
    const recipeId = recipeResult.rows[0].id;

    const ingredientRequests = body.ingredients.map(async ingredient => {
      return await ingredientsRepository.createIngredient(recipeId, ingredient);
    });
    const ingredientResults = await Promise.all(ingredientRequests);
    const ingredientIds = ingredientResults.map(res => res.rows[0].id);

    const instructions = body.instructions.forEach(async instruction => {
      await instructionsRepository.createInstruction(recipeId, instruction);
    });

    return { recipeId, ingredients: ingredientIds };
  }
};

module.exports = recipeService;
