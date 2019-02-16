const router = require("express").Router();

const recipeController = require("./recipeController");
router.get("/recipes", recipeController.retrieveAllRecipes);
router.get("/recipe/:id", recipeController.retrieveRecipe);
router.post("/recipe", recipeController.createRecipe);

module.exports = router;
