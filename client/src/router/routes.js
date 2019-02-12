import Recipe from "../components/recipe/Recipe";
import Recipes from "../components/recipe/Recipes";
import Test from "../components/Test";

export default [
  { path: "/recipe/:id", component: Recipe },
  { path: "/recipes", component: Recipes },
  { path: "/test", component: Test }
];
