const recipesRepository = require("../repositories/recipesRepository");
const ingredientsRepository = require("../repositories/ingredientsRepository");
const instructionsRepository = require("../repositories/instructionsRepository");

const recipeService = {
  retrieveRecipe: async recipeId => {
    const recipeResult = await recipesRepository.retrieveRecipe(recipeId);
    const recipe = recipeResult.rows[0];

    const ingredientsResult = await ingredientsRepository.retrieveIngredientsByRecipeId(
      recipeId
    );

    const instructionsResult = await instructionsRepository.retrieveInstructionsByRecipeId(
      recipeId
    );

    return {
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      ingredients: ingredientsResult.rows,
      instructions: instructionsResult.rows
    };
  },

  createRecipe: async body => {
    const recipeResult = await recipesRepository.createRecipe(body.recipe);
    const recipeId = recipeResult.rows[0].id;

    const ingredientRequests = body.ingredients.map(ingredient => {
      return ingredientsRepository.createIngredient(recipeId, ingredient);
    });
    await Promise.all(ingredientRequests);

    const instructionRequests = body.instructions.map(instruction => {
      return instructionsRepository.createInstruction(recipeId, instruction);
    });
    await Promise.all(instructionRequests);

    return await recipeService.retrieveRecipe(recipeId);
  }
};

module.exports = recipeService;
