import Recipe from "../components/recipe/Recipe";
import Recipes from "../components/recipe/Recipes";

export default [
  { path: "/recipe/:id", component: Recipe },
  { path: "/recipes", component: Recipes }
];
