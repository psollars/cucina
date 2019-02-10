const router = require("express").Router();

const recipeController = require("./recipeController");
router.get("/ingredients", recipeController.getAllIngredients);
router.post("/ingredient", recipeController.createIngredient);

// manual testing
const testController = require("./testController");
router.get("/:param", testController.param);
router.get("/test", testController.test);
router.post("/test", testController.test2);

module.exports = router;
