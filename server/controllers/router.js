const router = require("express").Router();

const recipeController = require("./recipeController");

router.get("/api/v1/:param", recipeController.param);
router.get("/api/v1/test", recipeController.test);
router.post("/api/v1/test", recipeController.test2);

router.post("/api/v1/ingredient", recipeController.createIngredient);

module.exports = router;
