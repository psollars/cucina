const router = require("express").Router();

const recipeController = require("./recipeController");
router.get("/recipe/:id", recipeController.retrieveRecipe);
router.post("/recipe", recipeController.createRecipe);

module.exports = router;
